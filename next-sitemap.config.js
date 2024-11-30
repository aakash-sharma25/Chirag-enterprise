/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://chiragepoxy.com", // Your site URL
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Maximum URLs per sitemap
  generateIndexSitemap: false, // Whether to generate an index sitemap
  exclude: [], // Exclude specific routes if needed

  transform: async (config, path) => {
    // Assign priorities based on route
    let priority = 0.8; // Default priority

    if (path === "/") {
      priority = 1.0; // Highest priority for homepage
    } else if (path.startsWith("/about")) {
      priority = 0.9; // High priority for About page
    } else if (path.startsWith("/contact")) {
      priority = 0.7; // Lower priority for Contact page
    } else if (path.startsWith("/services")) {
      priority = 0.85; // Medium-high priority for Services pages
    }

    return {
      loc: path, // URL location
      changefreq: "daily", // Frequency of updates
      priority, // Dynamic priority
      lastmod: new Date().toISOString(), // Last modified date
    };
  },
};

module.exports = config;
