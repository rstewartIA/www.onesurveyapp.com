/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.onesurveyapp.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
};

module.exports = config;
