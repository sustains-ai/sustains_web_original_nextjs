import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "sustains-blog-images.s3.us-east-1.amazonaws.com",
          },
        ],
      },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "same-origin-allow-popups",
                    },
                    {
                        key: "Cross-Origin-Embedder-Policy",
                        value: "unsafe-none", // Disables strict COEP checks
                    },
                ],
            },
        ];
    },
};

export default nextConfig;