import { createClient } from "@supabase/supabase-js";
import axios, { AxiosHeaders } from "axios";

// 1) Supabase Auth 전용 클라이언트(세션/토큰 자동 관리)
export const supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { persistSession: true, autoRefreshToken: true } },
);

// 2) Supabase REST 호출용 axios
const baseURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`;
const timeout = Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 10000);

export const api = axios.create({
  baseURL,
  timeout,
  headers: new AxiosHeaders({ "Content-Type": "application/json" }),
});

// 3) 요청 인터셉터: apikey + (로그인 시) Authorization 자동 주입
api.interceptors.request.use(async (config) => {
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const {
    data: { session },
  } = await supabaseAuth.auth.getSession();
  const access = session?.access_token;

  const headers = AxiosHeaders.from(config.headers);
  headers.set("apikey", anon);
  if (access) headers.set("Authorization", `Bearer ${access}`);

  // 필요한 기본값이 있다면 여기서 추가로:
  // headers.set("Accept", "application/json");

  config.headers = headers;
  return config;
});

// 4) 응답/에러 표준화
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    const message = err?.response?.data?.message || err?.message || "Unexpected error";
    return Promise.reject({ status, message, raw: err });
  },
);
