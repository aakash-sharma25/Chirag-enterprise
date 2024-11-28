/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://chiragepoxy.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: [],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
