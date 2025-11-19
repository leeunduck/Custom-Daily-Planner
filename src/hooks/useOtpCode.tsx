"use client";

import { useCallback, useMemo, useRef, useState } from "react";

export function useOtpCode(length: number) {
  const [values, setValues] = useState<string[]>(() => Array.from({ length }, () => ""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const focusInput = useCallback((index: number) => {
    const el = inputRefs.current[index];
    if (el) el.focus();
  }, []);

  const handleChange = useCallback(
    (index: number, raw: string) => {
      const nextChar = raw.replace(/\D/g, "").slice(-1);

      setValues((prev) => {
        const next = [...prev];
        next[index] = nextChar;
        return next;
      });

      if (nextChar && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [focusInput, length],
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      const hasValue = !!values[index];

      if (e.key === "Backspace" && !hasValue && index > 0) {
        focusInput(index - 1);
        return;
      }

      if (e.key === "ArrowLeft" && index > 0) {
        focusInput(index - 1);
        return;
      }

      if (e.key === "ArrowRight" && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [values, focusInput, length],
  );

  const codeValue = useMemo(() => values.join(""), [values]);

  return {
    values,
    inputRefs,
    handleChange,
    handleKeyDown,
    codeValue,
  };
}
