export default function Home() {
  return (
    <main className="p-8 space-y-10">
      {/* === Font Test === */}
      <section className="space-y-4">
        <h1 className="text-32-b">폰트 적용 테스트</h1>

        <div className="space-y-2">
          <p>한글: 가나다라마바사 아자차카타파하</p>
          <p>The quick brown fox jumps over the lazy dog</p>
          <p>숫자: 0123456789</p>
        </div>

        <div className="space-y-2">
          <p className="text-16-m">기본 스택 (var(--font-sans))</p>
          <p lang="ko" className="text-16-m">
            한글 스택 (var(--font-sans-ko))
          </p>
        </div>
      </section>

      {/* === Font Sizes === */}
      <section className="space-y-2">
        <h2 className="text-20-b">폰트 크기 테스트</h2>
        <p className="text-8-m">text-8-m → 8px</p>
        <p className="text-10-m">text-10-m → 10px</p>
        <p className="text-14-m">text-14-m → 14px</p>
        <p className="text-16-m">text-16-m → 16px</p>
        <p className="text-20-m">text-20-m → 20px</p>
        <p className="text-32-b">text-32-b → 32px Bold</p>
      </section>

      {/* === Colors === */}
      <section className="space-y-2">
        <h2 className="text-20-b">컬러 팔레트 테스트</h2>
        <p className="text-gray-600">Gray 600 텍스트</p>
        <p className="text-danger-600">Danger 600 텍스트</p>
        <p className="text-blue-500">Blue 500 텍스트</p>
        <div className="h-10 w-20 bg-gray-100 flex items-center justify-center">
          bg-gray-100
        </div>
        <div className="h-10 w-20 bg-blue-100 flex items-center justify-center">
          bg-blue-100
        </div>
      </section>

      {/* === Shadow / Radius === */}
      <section className="space-y-2">
        <h2 className="text-20-b">Shadow / Radius 테스트</h2>
        <div className="w-32 h-16 bg-white shadow-soft rounded-2xl flex items-center justify-center">
          Card
        </div>
      </section>
    </main>
  );
}
