export const getBaseUrl = () => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv ?? "http://localhost:3000";
};

export const withBase = (path = "/") => {
  const base = getBaseUrl();
  if (!path.startsWith("/")) return path; // 이미 절대 주소면 그대로
  return `${base}${path}`;
};
