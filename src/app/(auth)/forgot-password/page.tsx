import { AuthMain } from "@/components/auth/AuthMain";
import { ForgotPasswordForm } from "@/components/auth/forgotPassword/ForgotPasswordForm";
import { ForgotPasswordHeader } from "@/components/auth/forgotPassword/ForgotPasswordHeader";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "비밀번호 찾기",
    description: "PlanMate 비밀번호 찾기 페이지",
    canonical: "/forgot-password",
  }),
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <>
      <ForgotPasswordHeader />
      <AuthMain flow="forgot">
        <ForgotPasswordForm />
      </AuthMain>
    </>
  );
}
