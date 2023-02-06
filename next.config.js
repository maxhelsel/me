/**
 * @type {import('next').NextConfig}
 */

const ContentSecurityPolicy = `
  default-src 'self';
  frame-src https://www.google.com;
  img-src 'self';
  script-src 'self' https://www.google.com https://www.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
  object-src 'none';
  frame-ancestors 'none';
  connect-src 'self' https://www.google-analytics.com;
  font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
  form-action 'self';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const headers = process.env.NODE_ENV === 'production'
  ? [
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }
    ]
  : [
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'X-Content-Type-Options', value: 'nosniff' }
    ];

const nextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      { source: '/:path*',
        headers: headers
      }
    ]
  }
}

module.exports = nextConfig
