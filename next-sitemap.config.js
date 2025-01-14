module.exports = {
  siteUrl: process.env.SITE_URL || "https://pervasel.com/",
  generateRobotsTxt: true, // Tạo file robots.txt tự động
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*"],
};
