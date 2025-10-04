import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs (Internal)",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true, nosnippet: true },
  },
};

export default function Page() {
  return <main className="p-8">내부 테스트 페이지(검색 제외)</main>;
}
