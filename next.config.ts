// next.config.ts
import type { NextConfig } from "next";

/** 대표 도메인 (없으면 Vercel 프리뷰 기본값) */
const RAW_SITE_URL = process.env.SITE_URL ?? "https://myplanmate.vercel.app";
const url = new URL(RAW_SITE_URL);
const NON_WWW_HOST = url.hostname.replace(/^www\./, "");
const WWW_HOST = url.hostname.startsWith("www.") ? url.hostname : `www.${NON_WWW_HOST}`;
const DEST_ORIGIN = `${url.protocol}//${NON_WWW_HOST}`;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // x-powered-by: Next.js 헤더 제거

  // 1) 외부 이미지 도메인 허용
  images: {
    domains: [
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      // 필요하다면 여기 추가
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        // TODO: Supabase 프로젝트 도메인 확정되면 "**.supabase.co" → "abcd.supabase.co"로 교체
        // 위치: 대시보드 → Project Settings → Project URL (예: "abcd.supabase.co")
        // 조치: hostname을 "abcd.supabase.co"로 바꿔 사용.
      },
    ],
  },

  // 2) 보안 헤더 기본값 추가
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // 클릭재킹 방지
          { key: "X-Content-Type-Options", value: "nosniff" }, // MIME 타입 스니핑 방지
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // 안전한 referrer 전송
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // HTTPS 강제
          },
        ],
      },
    ];
  },

  // ✅ 3) 중복 주소 정규화 (추가)
  async redirects() {
    return [
      // A) 트레일링 슬래시 제거: /path/ → /path
      { source: "/:path*/", destination: "/:path*", permanent: true },

      // B) www → non-www: https://www.<host>/* → https://<host>/*
      {
        source: "/:path*",
        has: [{ type: "host", value: WWW_HOST }],
        destination: `${DEST_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
