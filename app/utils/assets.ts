/**
 * Helper para obtener rutas de assets con el basePath correcto
 * Funciona tanto en desarrollo (local) como en producción (GitHub Pages)
 */

const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
};

/**
 * Obtiene la ruta completa de un asset en la carpeta public
 * @param path - Ruta del asset (ej: "/mainLogo.svg" o "mainLogo.svg")
 * @returns Ruta completa con basePath si es necesario
 *
 * @example
 * getAssetPath("/mainLogo.svg") // "/mainLogo.svg" en local, "/navadav/mainLogo.svg" en producción
 * getAssetPath("mainLogo.svg") // "/mainLogo.svg" en local, "/navadav/mainLogo.svg" en producción
 */
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // Asegurar que el path empiece con /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
