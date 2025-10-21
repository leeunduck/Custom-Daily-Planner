const RAW_SITE_URL = process.env.SITE_URL ?? "https://myplanmate.vercel.app";
const siteUrl = RAW_SITE_URL.replace(/\/+$/, ""); // 끝 슬래시 제거

// "/" 이외 경로의 끝 슬래시 제거
const strip = (p) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);

const config = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  sitemapSize: 5000,

  // 기존 exclude 그대로 유지
  exclude: ["/api/*", "/admin/*", "/debug", "/lab/*"],

  // <loc>이 canonical과 1:1로 동일하도록 정규화
  transform: async (cfg, path) => {
    const loc = strip(path);

    // 우선순위 규칙(네 로직 보존)
    const priority = loc === "/" ? 1.0 : loc.startsWith("/blog") ? 0.8 : (cfg.priority ?? 0.7);

    return {
      loc, // ✅ canonical과 동일한 문자열
      changefreq: "daily",
      priority,
      lastmod: new Date().toISOString(),

      // 언어별 페이지가 있다면 경로 단위로 alternateRefs 매핑
      // 예) /todos → /ko/todos, /en/todos
      alternateRefs: [
        { href: `${siteUrl}/ko${loc === "/" ? "" : loc}`, hreflang: "ko" },
        { href: `${siteUrl}/en${loc === "/" ? "" : loc}`, hreflang: "en" },
      ],
    };
  },

  // robots.txt (네 로직 보존)
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin/", "/debug", "/lab/"] },
    ],
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`], // 동적 sitemap
  },
};

export default config;
