import type { NextConfig } from "next";

// Configuración del basePath para GitHub Pages
// En desarrollo (local), no se usa basePath
// En producción (GitHub Pages), se usa "/navadav" si está configurado
const basePath = "";

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
