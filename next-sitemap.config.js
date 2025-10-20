const siteUrl = process.env.SITE_URL ?? "https://myplanmate.vercel.app";

const config = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/debug", "/lab/*"],
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : path.startsWith("/blog") ? 0.8 : (config.priority ?? 0.7);

    return {
      loc: path,
      changefreq: "daily",
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `${siteUrl}/ko`, hreflang: "ko" },
        { href: `${siteUrl}/en`, hreflang: "en" },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin/", "/debug", "/lab/"] },
    ],
    additionalSitemaps: [],
  },
};

export default config;
