import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      "res.cloudinary.com",
      "img-c.udemycdn.com",
      "creator-assets.codedamn.com"
    ].map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
