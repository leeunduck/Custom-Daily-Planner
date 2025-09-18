export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">폰트 적용 테스트</h1>

      <section className="space-y-2">
        <p>한글: 가나다라마바사 아자차카타파하</p>
        <p>The quick brown fox jumps over the lazy dog</p>
        <p>숫자: 0123456789</p>
      </section>

      <section className="space-y-2">
        <p className="text-lg">기본 스택 (`--font-sans`)</p>
        <p lang="ko" className="text-lg">
          한글 스택 (`--font-sans-ko`)
        </p>
      </section>
    </main>
  );
}
