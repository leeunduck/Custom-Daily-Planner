import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LOCALE,
  OG_DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  TITLE_TEMPLATE,
} from "@/lib/constants";
import type { Metadata } from "next";

/** 전역 공통 메타데이터 (루트 레이아웃에서 export) */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE,
  },

  description: DEFAULT_DESCRIPTION,

  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE, // ← 문자열로 고정
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} 대표 이미지`,
      },
    ],
    locale: LOCALE,
  },

  twitter: {
    card: "summary_large_image",
  },

  alternates: {
    canonical: "/",
    languages: { ko: "/ko", en: "/en" },
  },

  verification: {
    google: "HwFH-3lcPM6dBVJFhRAlCVyQbdehNosUbYrvkBVGB2Q",
  },
};

/** 페이지별로 title/description/og 이미지 등을 안전하게 오버라이드 */
export function makePageMetadata(
  params: {
    title?: string;
    description?: string;
    ogImage?: string; // "/og/xxx.png" OK (metadataBase로 절대화)
    canonical?: `/${string}`; // 루트 기준 경로만 허용
  } = {},
): Metadata {
  const { title, description, ogImage = OG_DEFAULT_IMAGE, canonical } = params;

  const md: Metadata = {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    openGraph: {
      // openGraph.title은 string 필요 → DEFAULT_TITLE로 폴백
      title: title ?? DEFAULT_TITLE,
      description: description ?? DEFAULT_DESCRIPTION,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    ...(canonical ? { alternates: { canonical } } : {}),
  };

  return md;
}
