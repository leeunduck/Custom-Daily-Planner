import { Icon, ICON_KEYS } from "@/shared/ui/Icon";

export default function Home() {
  return (
    <main className="p-8 space-y-12">
      {/* === 0. 페이지 안내 === */}
      <header className="space-y-2">
        <h1 className="t-32-b">globals.css 유틸 종합 테스트</h1>
        <p className="tb-14-m text-gray-600">
          폰트 스택, 폰트 사이즈, 색상 팔레트, 섀도우/라운드, 폼 포커스, 링크/선택, 반응형까지 전부
          점검합니다.
        </p>
      </header>

      {/* === 1. 폰트 스택 테스트 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">1) 폰트 스택</h2>
        <div className="grid gap-2">
          <p className="t-16-m">기본 스택 (var(--font-sans)) → 영문/숫자에 SF 계열</p>
          <p lang="ko" className="t-16-m">
            한글 스택 (var(--font-sans-ko)) → 한글에 Apple SD Gothic Neo
          </p>
          <div className="space-y-1">
            <p>한글: 가나다라마바사 아자차카타파하</p>
            <p>영문: The quick brown fox jumps over the lazy dog</p>
            <p>숫자: 0123456789</p>
          </div>
        </div>
      </section>

      {/* === 2. 폰트 사이즈/굵기 테스트 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">2) 폰트 사이즈 & 굵기</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* 8~32 (m) */}
          <p className="t-8-m">t-8-m (8px / 500)</p>
          <p className="t-10-m">t-10-m (10px / 500)</p>
          <p className="t-12-m">t-12-m</p>
          <p className="t-14-m">t-14-m</p>
          <p className="t-16-m">t-16-m</p>
          <p className="t-18-m">t-18-m</p>
          <p className="t-20-m">t-20-m</p>
          <p className="t-22-m">t-22-m</p>
          <p className="t-24-m">t-24-m</p>
          <p className="t-26-m">t-26-m</p>
          <p className="t-28-m">t-28-m</p>
          <p className="t-30-m">t-30-m</p>
          <p className="t-32-m">t-32-m</p>

          {/* 8~32 (b) */}
          <p className="t-8-b">t-8-b (bold)</p>
          <p className="t-10-b">t-10-b</p>
          <p className="t-12-b">t-12-b</p>
          <p className="t-14-b">t-14-b</p>
          <p className="t-16-b">t-16-b</p>
          <p className="t-18-b">t-18-b</p>
          <p className="t-20-b">t-20-b</p>
          <p className="t-22-b">t-22-b</p>
          <p className="t-24-b">t-24-b</p>
          <p className="t-26-b">t-26-b</p>
          <p className="t-28-b">t-28-b</p>
          <p className="t-30-b">t-30-b</p>
          <p className="t-32-b">t-32-b</p>

          {/* 40~60 확장 */}
          <p className="t-40-m">t-40-m</p>
          <p className="t-44-m">t-44-m</p>
          <p className="t-48-m">t-48-m</p>
          <p className="t-50-m">t-50-m</p>
          <p className="t-54-m">t-54-m</p>
          <p className="t-58-m">t-58-m</p>
          <p className="t-60-m">t-60-m</p>

          <p className="t-40-b">t-40-b (bold)</p>
          <p className="t-44-b">t-44-b (bold)</p>
          <p className="t-48-b">t-48-b (bold)</p>
          <p className="t-50-b">t-50-b (bold)</p>
          <p className="t-54-b">t-54-b (bold)</p>
          <p className="t-58-b">t-58-b (bold)</p>
          <p className="t-60-b">t-60-b (bold)</p>
        </div>

        {/* Body (line-height 포함) */}
        <div className="space-y-2">
          <p className="tb-12-m">tb-12-m (lh 160%)</p>
          <p className="tb-14-m">tb-14-m (lh 180%)</p>
          <p className="tb-16-m">tb-16-m (lh 180%)</p>
          <p className="tb-18-b">tb-18-b (bold, lh 140%)</p>
          <p className="tb-20-b">tb-20-b (bold, lh 160%)</p>
          <p className="tb-24-m">tb-24-m (lh 160%)</p>
          <p className="tb-32-b">tb-32-b (bold, lh 140%)</p>
        </div>
      </section>

      {/* === 3. 컬러 팔레트 테스트 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">3) 컬러 팔레트</h2>

        {/* 텍스트 컬러 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <p className="text-gray-900">text-gray-900</p>
          <p className="text-gray-800">text-gray-800</p>
          <p className="text-gray-700">text-gray-700</p>
          <p className="text-gray-600">text-gray-600</p>
          <p className="text-gray-500">text-gray-500</p>
          <p className="text-gray-400">text-gray-400</p>
          <p className="text-danger-700">text-danger-700</p>
          <p className="text-danger-600">text-danger-600</p>
          <p className="text-danger-500">text-danger-500</p>
          <p className="text-danger-400">text-danger-400</p>
          <p className="text-blue-600">text-blue-600</p>
          <p className="text-blue-500">text-blue-500</p>
          <p className="text-blue-400">text-blue-400</p>
        </div>

        {/* 배경 컬러 스와치 */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[
            ["bg-gray-50", "bg-gray-50"],
            ["bg-gray-100", "bg-gray-100"],
            ["bg-gray-200", "bg-gray-200"],
            ["bg-gray-300", "bg-gray-300"],
            ["bg-gray-400", "bg-gray-400"],
            ["bg-gray-500", "bg-gray-500"],
            ["bg-blue-100", "bg-blue-100"],
            ["bg-blue-400", "bg-blue-400"],
            ["bg-blue-500", "bg-blue-500"],
            ["bg-blue-600", "bg-blue-600"],
            ["bg-danger-400", "bg-danger-400"],
            ["bg-danger-600", "bg-danger-600"],
          ].map(([cls, label]) => (
            <div
              key={cls}
              className={`h-12 rounded-2xl shadow-soft flex items-center justify-center ${cls}`}
            >
              <span className="t-12-m bg-white/70 px-2 rounded">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === 4. 섀도우/라운드 & 카드 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">4) 섀도우 / 라운드</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <p className="t-14-m text-gray-700">rounded-2xl + shadow-soft</p>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-soft p-6">
            <p className="t-14-m text-gray-700">bg-gray-100 카드</p>
          </div>
          <div className="bg-blue-100 rounded-2xl shadow-soft p-6">
            <p className="t-14-m text-gray-700">bg-blue-100 카드</p>
          </div>
        </div>
      </section>

      {/* === 5. 폼 & 포커스 접근성 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">5) 폼 / 포커스</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <label className="t-14-m text-gray-700">정상 입력</label>
            <input type="text" placeholder="플레이스홀더" className="p-3" />
          </div>
          <div className="space-y-3">
            <label className="t-14-m text-gray-700">비활성(disabled)</label>
            <input type="text" disabled value="disabled" className="p-3" />
          </div>
          {/* danger input 섹션 제거됨 */}
          <div className="space-y-3">
            <label className="t-14-m text-gray-700">Textarea</label>
            <textarea rows={3} placeholder="내용을 입력하세요" className="p-3" />
          </div>
        </div>

        {/* 버튼 2개만: 기본 / 비활성 */}
        <div className="space-x-3">
          {/* 기본 버튼: 배경 흰색, 테두리 #d4d4d4, 호버 시 #1f1f1f + 글자 흰색 */}
          <button
            className="px-4 py-2 rounded-2xl shadow-soft t-14-m
                       bg-[var(--color-white)] text-[var(--color-gray-900)]
                       border border-[var(--color-gray-300)]
                       transition
                       hover:bg-[var(--color-gray-800)] hover:text-[var(--color-white)]"
          >
            기본 버튼
          </button>

          {/* 비활성 버튼: 배경 #a3a3a3, 글자 #737373 */}
          <button
            className="px-4 py-2 rounded-2xl shadow-soft t-14-m
                       bg-[var(--color-gray-400)] text-[var(--color-gray-500)]
                       cursor-not-allowed border border-[var(--color-gray-400)]"
            disabled
          >
            비활성 버튼
          </button>
        </div>

        <p className="t-12-m">
          포커스 테스트: 탭(Tab)으로 이동 시{" "}
          <span className="text-gray-900">outline(포커스 강조)</span>가 보여야 합니다. (글로벌
          설정은 그레이 계열)
        </p>
      </section>

      {/* === 6. 링크 & 선택(Selection) 테스트 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">6) 링크 & 텍스트 선택</h2>
        <p className="tb-14-m">
          <a href="#link">링크 예시</a> — hover 시 색이 더 밝게 바뀌어야 합니다.
        </p>
        <p className="tb-14-m">
          아래 문장을 드래그해서 선택해 보세요. 선택 영역은 파란 배경/흰 글자여야 합니다.
        </p>
        <p className="tb-14-m">
          The quick brown fox jumps over the lazy dog. 가나다라마바사 아자차카타파하 0123456789
        </p>
      </section>

      {/* === 7. 보더/구분선 테스트 === */}
      <section className="space-y-4">
        <h2 className="t-24-b">7) 보더/구분선</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-soft border border-gray-200">
            <p className="t-14-m">border-gray-200 카드</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-soft border border-gray-300">
            <p className="t-14-m">border-gray-300 카드 (인풋/체크박스 기준)</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-soft">
            <div className="h-px bg-gray-200 mb-3" />
            <p className="t-14-m">컨테이너 구분선: bg-gray-200</p>
          </div>
        </div>
      </section>

      {/* === 8. 반응형(Breakpoints) 테스트 === */}
      <section className="space-y-3">
        <h2 className="t-24-b">8) 반응형(Breakpoints)</h2>
        <div className="t-14-m">
          <span className="inline-block px-3 py-2 rounded-2xl bg-gray-100 mr-2 sm:hidden">
            &lt;640px: xs
          </span>
          <span className="hidden sm:inline-block px-3 py-2 rounded-2xl bg-gray-100 mr-2 md:hidden">
            ≥640px: sm
          </span>
          <span className="hidden md:inline-block px-3 py-2 rounded-2xl bg-gray-100 mr-2 lg:hidden">
            ≥768px: md
          </span>
          <span className="hidden lg:inline-block px-3 py-2 rounded-2xl bg-gray-100 mr-2 xl:hidden">
            ≥1024px: lg
          </span>
          <span className="hidden xl:inline-block px-3 py-2 rounded-2xl bg-gray-100 mr-2 2xl:hidden">
            ≥1280px: xl
          </span>
          <span className="hidden 2xl:inline-block px-3 py-2 rounded-2xl bg-gray-100">
            ≥1536px: 2xl
          </span>
        </div>
      </section>

      {/* === 9. 배경색(body) 확인 === */}
      <section className="space-y-2">
        <h2 className="t-24-b">9) 전역 배경/텍스트</h2>
        <p className="tb-14-m">
          body 배경: <code>--color-background</code>, 기본 텍스트: <code>--color-gray-900</code>
        </p>
        <div className="p-4 bg-white rounded-2xl shadow-soft border border-gray-200">
          <p className="t-14-m">흰 카드 위의 대비 체크</p>
        </div>
      </section>

      <h1 className="mb-6 text-2xl font-bold">📦 Icon Showcase</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {ICON_KEYS.map((name) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <Icon name={name} size={28} />
            <span className="text-xs text-gray-600">{name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
