import type { NextConfig } from "next";

// Configuración del basePath para GitHub Pages
// Si tu repositorio está en la raíz (ej: usuario.github.io), deja esto vacío
// Si tu repositorio NO está en la raíz (ej: usuario/navadav), usa el nombre del repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/navadav";

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
