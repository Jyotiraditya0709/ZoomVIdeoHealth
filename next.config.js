// Define the CSP policy as a single-line string
const ContentSecurityPolicy =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "style-src-elem 'self' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com;";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.boringavatars.com",
        pathname: "**/*",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
