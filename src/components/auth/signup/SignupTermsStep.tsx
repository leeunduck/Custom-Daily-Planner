"use client";

export function SignupTermsStep() {
  return (
    <fieldset className="flex flex-col gap-7">
      <legend className="sr-only">약관 동의</legend>

      <label className="flex items-center justify-between gap-4 t-14-m text-[var(--color-gray-900)]">
        <span className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreeServiceTerms"
            className="h-4 w-4 border border-[var(--color-gray-300)]"
          />
          <span>[필수] 서비스 이용약관에 동의합니다</span>
        </span>

        <button
          type="button"
          className="t-12-m text-[var(--color-gray-500)] underline-offset-2 hover:underline"
        >
          상세보기
        </button>
      </label>

      <label className="flex items-center justify-between gap-4 t-14-m text-[var(--color-gray-900)]">
        <span className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreePrivacy"
            className="h-4 w-4 border border-[var(--color-gray-300)]"
          />
          <span>[필수] 개인정보 처리방침에 동의합니다</span>
        </span>

        <button
          type="button"
          className="t-12-m text-[var(--color-gray-500)] underline-offset-2 hover:underline"
        >
          상세보기
        </button>
      </label>
    </fieldset>
  );
}
