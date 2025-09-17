const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next 15: use serverExternalPackages (replaces experimental.serverComponentsExternalPackages)
    serverExternalPackages: [],

    // Performance optimizations
    images: {
        domains: [],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000, // 1 year
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compression and optimization
    compress: true,
    poweredByHeader: false,

    // Security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
        ];
    },

    // Minimal webpack customizations
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
        };
        return config;
    },

    // Source maps in prod (disabled by default)
    productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
