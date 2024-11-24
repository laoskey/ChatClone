import type { NextConfig } from "next";
import { buffer } from "stream/consumers";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },

  images: {
    domains: ["owaohzxfnovawbdkaobd.supabase.co"],
  },
};

export default nextConfig;
