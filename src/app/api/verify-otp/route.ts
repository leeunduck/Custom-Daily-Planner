import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type Body = { email?: string; token?: string };

export async function POST(req: Request) {
  const body = (await req.json()) as Body;
  const email = (body.email ?? "").trim().toLowerCase();
  const token = (body.token ?? "").trim();

  if (!email || !token) {
    return NextResponse.json(
      { ok: false, verified: false, message: "이메일 또는 인증번호가 비어 있습니다." },
      { status: 400 },
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(url, anon, { auth: { persistSession: false } });

  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    return NextResponse.json({
      ok: true,
      verified: false,
      message: "인증번호가 올바르지 않습니다.",
    });
  }

  return NextResponse.json({ ok: true, verified: true, message: "이메일 인증이 완료되었습니다." });
}
