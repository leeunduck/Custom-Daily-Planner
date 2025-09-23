import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom Daily Planner",
  description: "나만의 맞춤형 플래너를 손쉽게 디자인하고 사용할 수 있는 웹 앱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
