import { supabaseAdmin } from "@/lib/supabase/admin";
import { isValidEmail } from "@/lib/validators";
import { NextResponse } from "next/server";

export type UpdateNameBody = {
  email?: string;
  name?: string;
};

export type UpdateNameOkRes = {
  ok: true;
  message: string;
};

export type UpdateNameFailRes = {
  ok: false;
  message: string;
};

export type UpdateNameResponse = UpdateNameOkRes | UpdateNameFailRes;

type ProfileIdRow = {
  id: string;
};

const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) return err.message;
  return "알 수 없는 오류가 발생했습니다.";
};

export async function POST(req: Request): Promise<Response> {
  let body: UpdateNameBody;

  try {
    body = (await req.json()) as UpdateNameBody;
  } catch {
    const res: UpdateNameFailRes = { ok: false, message: "요청 본문(JSON)이 올바르지 않습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const name = (body.name ?? "").trim();

  if (!email) {
    const res: UpdateNameFailRes = { ok: false, message: "이메일이 비어 있습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  if (!isValidEmail(email)) {
    const res: UpdateNameFailRes = { ok: false, message: "이메일 형식이 올바르지 않습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  if (!name) {
    const res: UpdateNameFailRes = { ok: false, message: "이름이 비어 있습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  // ✅ 1) profiles.email 기준으로 이름 저장 + userId 확보
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .update({ name })
    .eq("email", email)
    .select("id")
    .limit(1);

  if (error) {
    const res: UpdateNameFailRes = { ok: false, message: "이름 저장 중 오류가 발생했습니다." };
    return NextResponse.json(res, { status: 500 });
  }

  const row = (data?.[0] as ProfileIdRow | undefined) ?? undefined;
  if (!row?.id) {
    const res: UpdateNameFailRes = {
      ok: false,
      message: "프로필을 찾을 수 없습니다. 이메일 인증을 다시 진행해주세요.",
    };
    return NextResponse.json(res, { status: 404 });
  }

  const userId = row.id;

  // ✅ 2) auth.users 메타데이터도 동기화 (실패해도 profiles 저장 성공이면 OK 처리)
  try {
    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      user_metadata: {
        name,
        display_name: name,
      },
    });

    if (authError) {
      // 여기서 실패하더라도 가입 플로우를 막을 필요는 없어서 로그만 남기는 게 일반적
      console.error("[update-name] auth metadata update failed:", authError.message);
    }
  } catch (err: unknown) {
    console.error("[update-name] auth metadata update exception:", getErrorMessage(err));
  }

  const res: UpdateNameOkRes = { ok: true, message: "이름이 저장되었습니다." };
  return NextResponse.json(res);
}
