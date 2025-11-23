import { AuthMain } from "@/components/auth/AuthMain";
import { SignupForm } from "@/components/auth/signup/SignupForm";
import { SignupHeader } from "@/components/auth/signup/SignupHeader";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입",
    description: "MyPlanMate 회원가입페이지",
    canonical: "/signup/basic",
  }),
  robots: { index: false, follow: false },
};

export default function SignupEmailPage() {
  return (
    <>
      <SignupHeader />
      <AuthMain flow="signup">
        <SignupForm />
      </AuthMain>
    </>
  );
}
