/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Enable App Router
        appDir: true,
        // Optimize server components
        serverComponentsExternalPackages: [],
    },

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
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
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

    // Webpack optimizations
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Optimize bundle size
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
        };

        // Optimize for production
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    default: false,
                    vendors: false,
                    // Vendor chunk
                    vendor: {
                        chunks: 'all',
                        test: /node_modules/,
                        name: 'vendor',
                        priority: 20,
                        enforce: true,
                    },
                    // Animation libraries chunk
                    animations: {
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/](framer-motion|gsap|@studio-freight\/lenis)/,
                        name: 'animations',
                        priority: 30,
                        enforce: true,
                    },
                    // Common chunk
                    common: {
                        chunks: 'all',
                        minChunks: 2,
                        name: 'common',
                        priority: 10,
                        enforce: true,
                    },
                },
            };
        }

        return config;
    },

    // Enable source maps in production for better debugging
    productionBrowserSourceMaps: false,

    // Optimize fonts
    optimizeFonts: true,

    // Bundle analyzer (optional)
    ...(process.env.ANALYZE === 'true' && {
        experimental: {
            ...nextConfig.experimental,
        },
    }),
};

const path = require('path');

module.exports = nextConfig;
