// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700">페이지를 찾을 수 없습니다</h2>
      <p className="mt-2 text-gray-500">주소가 잘못되었거나, 페이지가 삭제되었을 수 있습니다.</p>

      <Link href="/" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
