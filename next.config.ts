import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/**')],
  },
  // Protection contre le clickjacking : le site ne peut pas être affiché dans une iframe.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
        ],
      },
    ];
  },
};

export default nextConfig;
