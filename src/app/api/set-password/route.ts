import { supabaseAdmin } from "@/lib/supabase/admin";
import { isValidEmail } from "@/lib/validators";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export type SetPasswordBody = {
  email?: string;
  password?: string;
};

export type SetPasswordOkRes = {
  ok: true;
  message: string;
};

export type SetPasswordFailRes = {
  ok: false;
  message: string;
};

export type SetPasswordResponse = SetPasswordOkRes | SetPasswordFailRes;

const getBearerToken = (req: Request): string => {
  const value = req.headers.get("authorization") ?? "";
  if (!value.startsWith("Bearer ")) return "";
  return value.slice("Bearer ".length).trim();
};

export async function POST(req: Request): Promise<Response> {
  let body: SetPasswordBody;

  try {
    body = (await req.json()) as SetPasswordBody;
  } catch {
    const res: SetPasswordFailRes = {
      ok: false,
      message: "요청 본문(`JSON`)이 올바르지 않습니다.",
    };
    return NextResponse.json(res, { status: 400 });
  }

  const accessToken = getBearerToken(req);
  const email = (body.email ?? "").trim().toLowerCase();
  const password = (body.password ?? "").trim();

  if (!accessToken) {
    const res: SetPasswordFailRes = { ok: false, message: "인증 토큰이 없습니다." };
    return NextResponse.json(res, { status: 401 });
  }

  if (!email) {
    const res: SetPasswordFailRes = { ok: false, message: "이메일이 비어 있습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  if (!isValidEmail(email)) {
    const res: SetPasswordFailRes = { ok: false, message: "이메일 형식이 올바르지 않습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  if (!password) {
    const res: SetPasswordFailRes = { ok: false, message: "비밀번호가 비어 있습니다." };
    return NextResponse.json(res, { status: 400 });
  }

  // ✅ 1) 토큰으로 “누구인지” 확인
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(url, anon, { auth: { persistSession: false } });

  const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);

  if (userError || !userData.user) {
    const res: SetPasswordFailRes = { ok: false, message: "인증 정보가 유효하지 않습니다." };
    return NextResponse.json(res, { status: 401 });
  }

  const authedEmail = (userData.user.email ?? "").toLowerCase();
  if (authedEmail !== email) {
    const res: SetPasswordFailRes = {
      ok: false,
      message: "인증된 이메일과 요청 이메일이 일치하지 않습니다.",
    };
    return NextResponse.json(res, { status: 403 });
  }

  // ✅ 2) `Admin` 권한으로 비밀번호 설정
  const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(userData.user.id, {
    password,
  });

  if (updateError) {
    const res: SetPasswordFailRes = { ok: false, message: "비밀번호 저장 중 오류가 발생했습니다." };
    return NextResponse.json(res, { status: 500 });
  }

  const res: SetPasswordOkRes = { ok: true, message: "비밀번호가 설정되었습니다." };
  return NextResponse.json(res);
}
