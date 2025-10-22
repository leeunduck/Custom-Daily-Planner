// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LOCALE,
  OG_DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL, // ✅ constants에서 SITE_URL 사용
  TITLE_TEMPLATE,
} from "@/seo/constants";

export const metadata: Metadata = {
  // ✅ 절대 URL 기준점 (canonical / OG 절대경로 변환용)
  metadataBase: new URL(SITE_URL),

  // 전역 타이틀 규칙
  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE, // 예: "{페이지제목} | MyPlanMate"
  },

  // 전역 설명
  description: DEFAULT_DESCRIPTION,

  // Open Graph 기본값
  openGraph: {
    type: "website",
    url: "/", // metadataBase 기준으로 절대 URL 처리
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_DEFAULT_IMAGE, // "/og/og-default.png" → 절대 URL로 자동 변환
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} 대표 이미지`,
      },
    ],
    locale: LOCALE, // "ko_KR"
  },

  // Twitter 카드 기본값
  twitter: {
    card: "summary_large_image",
  },

  // canonical 및 언어별 hreflang
  alternates: {
    canonical: "/", // => https://myplanmate.vercel.app/
    languages: {
      ko: "/ko", // => https://myplanmate.vercel.app/ko
      en: "/en", // => https://myplanmate.vercel.app/en
    },
  },

  verification: {
    google: "HwFH-3lcPM6",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <body>
          {/*
          Providers로 감싸는 이유:
          - React Query의 QueryClientProvider를 전역 적용
          - 모든 하위 컴포넌트가 동일한 client & cache 공유
          - useQuery, useMutation 훅이 어디서든 정상 동작
        */}
          <Providers>{children}</Providers>
        </body>
      </head>
    </html>
  );
}
