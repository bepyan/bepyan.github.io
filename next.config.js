const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
