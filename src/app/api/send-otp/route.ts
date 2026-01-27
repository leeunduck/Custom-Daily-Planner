import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type Body = { email?: string };

export async function POST(req: Request) {
  const body = (await req.json()) as Body;
  const email = (body.email ?? "").trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ ok: false, message: "이메일이 비어 있습니다." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const supabase = createClient(url, anon, { auth: { persistSession: false } });

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return NextResponse.json({ ok: false, message: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "인증 메일을 발송했습니다." });
}
