import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path((?!_next|api)[^.]+)",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
