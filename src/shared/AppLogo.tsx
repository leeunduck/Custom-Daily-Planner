import Image from "next/image";
import Link from "next/link";

export function AppLogo() {
  return (
    <Link href="/" aria-label="MyPlanMate 홈으로 이동">
      <Image
        src="/images/logo.png"
        alt="MyPlanMate 로고"
        width={150}
        height={150}
        priority
        className="object-contain select-none hover:opacity-90 transition-opacity"
      />
    </Link>
  );
}
