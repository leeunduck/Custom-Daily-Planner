import { baseMetadata } from "@/seo/metadata";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./QueryProviders";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
