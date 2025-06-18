/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false; // disable webpack caching during development
        }
        return config;
    },
};

export default nextConfig;
