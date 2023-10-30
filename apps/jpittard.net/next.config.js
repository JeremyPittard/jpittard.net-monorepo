/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui", "tailwind-config"]);

const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
