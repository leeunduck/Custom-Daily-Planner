import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Custom Daily Planner",
  description: "나만의 맞춤형 플래너를 손쉽게 디자인하고 사용할 수 있는 웹 앱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/*
          Providers로 감싸는 이유:
          - React Query의 QueryClientProvider를 전역 적용
          - 모든 하위 컴포넌트가 동일한 client & cache 공유
          - useQuery, useMutation 훅이 어디서든 정상 동작
        */}
        {/* 
          ✅ 추후 확장 예시:
          <AuthProvider>
            <ThemeProvider>
              <Providers>{children}</Providers>
            </ThemeProvider>
          </AuthProvider>
        */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
