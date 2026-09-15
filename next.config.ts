import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd())],
  },
};

export default nextConfig;
