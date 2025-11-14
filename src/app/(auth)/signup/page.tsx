import { AuthHeader } from "@/components/auth/AuthHeader";
import { SignupPageTitle } from "@/components/auth/signup/SignupPageTitle";
import { SignupSubtitle } from "@/components/auth/signup/SignupSubTitle";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입",
    description: "PlanMate 회원가입 페이지",
    canonical: "/signup",
  }),
  robots: { index: false, follow: false }, // 인증 관련 페이지는 검색 제외
};

export default function SignupPage() {
  return (
    <>
      <AuthHeader>
        <SignupPageTitle />
        <SignupSubtitle />
      </AuthHeader>
    </>
  );
}
