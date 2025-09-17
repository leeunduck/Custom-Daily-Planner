// app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
        role="status"
        aria-live="polite"
        aria-label="페이지 로딩 중">
        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
        <span className="text-sm text-gray-700">로딩 중…</span>
      </div>
    </div>
  );
}
