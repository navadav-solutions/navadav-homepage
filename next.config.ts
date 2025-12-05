import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Si tu repositorio no está en la raíz, descomenta y ajusta el basePath
  // basePath: "/navadav",
  // assetPrefix: "/navadav",
};

export default nextConfig;
