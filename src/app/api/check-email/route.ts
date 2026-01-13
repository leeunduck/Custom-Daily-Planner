import { supabaseAdmin } from "@/lib/supabase/admin";
import { isValidEmail } from "@/lib/validators";
import type { CheckEmailBody, CheckEmailFailRes, CheckEmailOkRes } from "@/types/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  let body: CheckEmailBody;

  try {
    body = (await req.json()) as CheckEmailBody;
  } catch {
    const res: CheckEmailFailRes = {
      ok: false,
      available: false,
      message: "요청 본문(JSON)이 올바르지 않습니다.",
    };
    return NextResponse.json(res, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();

  if (!email) {
    const res: CheckEmailFailRes = {
      ok: false,
      available: false,
      message: "이메일이 비어 있습니다.",
    };
    return NextResponse.json(res, { status: 400 });
  }

  if (!isValidEmail(email)) {
    const res: CheckEmailFailRes = {
      ok: false,
      available: false,
      message: "이메일 형식이 올바르지 않습니다.",
    };
    return NextResponse.json(res, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("email", email)
    .limit(1);

  if (error) {
    const res: CheckEmailFailRes = {
      ok: false,
      available: false,
      message: "서버 확인 중 오류가 발생했습니다.",
    };
    return NextResponse.json(res, { status: 500 });
  }

  const exists = (data?.length ?? 0) > 0;

  if (exists) {
    const res: CheckEmailOkRes = {
      ok: true,
      available: false,
      message: "이미 가입된 이메일입니다.",
    };
    return NextResponse.json(res);
  }

  const res: CheckEmailOkRes = {
    ok: true,
    available: true,
    message: "사용 가능한 이메일입니다.",
  };
  return NextResponse.json(res);
}
