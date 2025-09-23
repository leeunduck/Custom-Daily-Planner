// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  // Next 권장 + TS + Prettier 추천(FlatCompat로 레거시 확장 변환)
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"),

  // 무시 목록
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default config;
