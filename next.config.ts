// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ← THIS IS THE ONLY THING YOU NEED TO ADD
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ec-ma.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images?q=tbn:ANd9Gc**", // Matches the pattern
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images?q=tbn:ANd9Gc**", // Matches Google's thumbnail pattern
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images?q=tbn:ANd9Gc**",
      },
    ],
  },
};

export default nextConfig;
