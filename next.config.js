// next.config.js

// CSP defined as a one-line string to avoid multiline issues
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.googlesyndication.com https://*.google-analytics.com https://*.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.gstatic.com;
  connect-src 'self' https://*.google-analytics.com https://*.googleapis.com https://*.vercel.app;
  frame-src https://*.google.com https://*.youtube.com;
`
  .replace(/\n/g, " ")
  .trim();

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
