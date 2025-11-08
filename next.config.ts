import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚫 Ignora erros de ESLint durante o build (necessário pra deploy)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
