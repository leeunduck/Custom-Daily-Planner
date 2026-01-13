"use client";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { cn } from "@/lib/utils";
import { isValidEmail } from "@/lib/validators";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

import type {
  CheckEmailResponse,
  SendOtpResponse,
  StepFieldMeta,
  VerifyOtpResponse,
} from "@/types/auth";
import { useCallback, useEffect, useState } from "react";

export function SignupEmailStep({ fieldId, fieldName }: StepFieldMeta) {
  const { email, setEmail } = useSignupFormStore();
  const { goNext } = useSignupStepStore();

  const [emailError, setEmailError] = useState("");

  const [serverMsg, setServerMsg] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const [isChecking, setIsChecking] = useState(false);

  const [otp, setOtp] = useState("");
  const [otpMsg, setOtpMsg] = useState("");
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const rightMsg = emailError || serverMsg;

  const rightMsgClass = cn(
    "t-12-m",
    emailError ? "text-[var(--color-danger-600)]" : "",
    !emailError && isAvailable === true ? "text-[var(--color-blue-500)]" : "",
    !emailError && isAvailable === false ? "text-[var(--color-danger-600)]" : "",
    !emailError && isAvailable === null && serverMsg ? "text-[var(--color-gray-600)]" : "",
  );

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
    setServerMsg("");
    setIsAvailable(null);

    setOtp("");
    setOtpMsg("");
    setIsVerified(null);
  };

  const checkEmailDuplication = async () => {
    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
      setServerMsg("");
      setIsAvailable(null);
      return;
    }

    try {
      setIsChecking(true);
      setEmailError("");

      const res = await fetch("/api/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as CheckEmailResponse;

      if (!res.ok) {
        setServerMsg(data?.message || "서버 확인 중 오류가 발생했습니다.");
        setIsAvailable(false);
        return;
      }

      setServerMsg(data.message);
      setIsAvailable(data.available);
    } catch {
      setServerMsg("서버 확인 중 오류가 발생했습니다.");
      setIsAvailable(false);
    } finally {
      setIsChecking(false);
    }
  };

  const sendOtp = useCallback(async () => {
    try {
      setIsSending(true);
      setOtpMsg("");

      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as SendOtpResponse;

      if (!res.ok) {
        setOtpMsg(data?.message || "인증 메일 발송에 실패했습니다.");
        return;
      }

      setOtpMsg(data.message);
    } catch {
      setOtpMsg("인증 메일 발송에 실패했습니다.");
    } finally {
      setIsSending(false);
    }
  }, [email]);

  const verifyOtp = async () => {
    if (otp.trim().length !== 6) {
      setOtpMsg("인증번호 6자리를 입력해주세요.");
      setIsVerified(false);
      return;
    }

    try {
      setIsVerifying(true);

      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: otp }),
      });

      const data = (await res.json()) as VerifyOtpResponse;

      if (!res.ok) {
        setOtpMsg(data?.message || "인증번호 확인 중 오류가 발생했습니다.");
        setIsVerified(false);
        return;
      }

      setOtpMsg(data.message);
      setIsVerified(data.verified);
    } catch {
      setOtpMsg("인증번호 확인 중 오류가 발생했습니다.");
      setIsVerified(false);
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (isAvailable === true) {
      if (isVerified === true) return;

      setOtp("");
      setOtpMsg("");
      setIsVerified(null);

      sendOtp();
    }
  }, [isAvailable, isVerified, sendOtp]);

  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
      hasError = true;
    }

    if (isAvailable !== true) {
      setServerMsg(serverMsg || "이메일 중복 확인을 먼저 완료해주세요.");
      hasError = true;
    }

    if (isVerified !== true) {
      setOtpMsg(otpMsg || "이메일 인증을 완료해주세요.");
      hasError = true;
    }

    if (hasError) return;

    goNext();
  });

  const canCheck = isValidEmail(email) && !isChecking;

  const showServerOk = isAvailable === true;
  const showServerFail = isAvailable === false;

  const emailBorderClass = emailError
    ? "border-[1.5px] border-[var(--color-danger-600)]"
    : showServerOk
      ? "border-[1.5px] border-[var(--color-blue-500)]"
      : showServerFail
        ? "border-[1.5px] border-[var(--color-danger-600)]"
        : "";

  const showOtpUi = isAvailable === true;

  const otpBorderClass =
    isVerified === false
      ? "border-[1.5px] border-[var(--color-danger-600)]"
      : isVerified === true
        ? "border-[1.5px] border-[var(--color-blue-500)]"
        : "";

  const otpMsgClass =
    isVerified === true
      ? "text-[var(--color-blue-600)]"
      : isVerified === false
        ? "text-[var(--color-danger-600)]"
        : "text-[var(--color-gray-600)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
          이메일
        </label>
        {rightMsg ? <span className={rightMsgClass}>{rightMsg}</span> : null}
      </div>

      <div className="relative">
        <Input
          id={fieldId}
          name={fieldName}
          type="email"
          placeholder="example@gmail.com"
          status="default"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          onFocus={() => {
            setEmailError("");
            setServerMsg("");
            setIsAvailable(null);

            setOtp("");
            setOtpMsg("");
            setIsVerified(null);
          }}
          className={cn("w-full pr-[92px]", emailBorderClass)}
        />

        <button
          type="button"
          onClick={checkEmailDuplication}
          disabled={!canCheck}
          className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2",
            "h-auto p-0 bg-transparent shadow-none hover:bg-transparent",
            "t-12-m",
            !canCheck ? "text-[var(--color-gray-500)] cursor-not-allowed" : "",
            canCheck ? "text-[var(--color-gray-900)] cursor-pointer" : "",
          )}
        >
          {isChecking ? "확인 중" : "중복 확인"}
        </button>
      </div>

      {showOtpUi ? (
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label htmlFor="otp" className="t-14-m text-[var(--color-gray-700)]">
              인증번호
            </label>

            {otpMsg ? <span className={cn("t-12-m", otpMsgClass)}>{otpMsg}</span> : null}
          </div>

          <div className="relative">
            <Input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              placeholder="6자리 입력"
              value={otp}
              onChange={(e) => {
                const onlyNum = e.target.value.replace(/\D/g, "").slice(0, 6);
                setOtp(onlyNum);
                setOtpMsg("");
                setIsVerified(null);
              }}
              className={cn("w-full pr-[92px]", otpBorderClass)}
            />

            <button
              type="button"
              onClick={verifyOtp}
              disabled={isVerifying || otp.trim().length !== 6}
              className={cn(
                "absolute right-6 top-1/2 -translate-y-1/2",
                "h-auto p-0 bg-transparent shadow-none hover:bg-transparent",
                "t-12-m",
                isVerifying || otp.trim().length !== 6
                  ? "text-[var(--color-gray-500)] cursor-not-allowed"
                  : "text-[var(--color-gray-900)] cursor-pointer",
              )}
            >
              {isVerifying ? "확인 중" : "인증 확인"}
            </button>
          </div>

          <Button type="button" preset="auth" bg="basic" onClick={sendOtp} className="w-full">
            {isSending ? "재발송 중" : "재발송"}
          </Button>
        </div>
      ) : null}

      <Button type="submit" preset="auth" bg="basic" className="mt-2">
        다음
      </Button>
    </form>
  );
}
