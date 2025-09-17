"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 에러 로깅 (예: Sentry, 서버 로그 전송 등)
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-3xl font-bold text-gray-800">
          문제가 발생했습니다 😢
        </h1>
        <p className="mt-2 text-gray-600">잠시 후 다시 시도해주세요.</p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            다시 시도
          </button>

          <Link
            href="/"
            className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">
            홈으로
          </Link>
        </div>
      </body>
    </html>
  );
}
