import type { NextConfig } from "next";

// Si tu repositorio NO está en la raíz (ej: usuario/navadav),
// descomenta y ajusta el basePath con el nombre de tu repositorio
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// Ejemplo: const basePath = "/navadav";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
