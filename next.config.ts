// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/argenta/v12",
  assetPrefix: "/argenta/v12",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
