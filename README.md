This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración inicial:

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages en tu repositorio de GitHub
   - En "Source", selecciona "GitHub Actions"
   - Guarda los cambios

2. **Si tu repositorio NO está en la raíz** (ej: `usuario/navadav`):
   - Descomenta y ajusta `basePath` y `assetPrefix` en `next.config.ts`:
   ```typescript
   basePath: "/navadav",
   assetPrefix: "/navadav",
   ```

3. **Push a la rama main:**
   - El workflow de GitHub Actions se ejecutará automáticamente
   - Ve a la pestaña "Actions" en tu repositorio para ver el progreso
   - Una vez completado, tu sitio estará disponible en:
     - `https://[tu-usuario].github.io/[nombre-repo]/`
     - O `https://[tu-usuario].github.io/` si está en la raíz

### Build local:

Para probar el build localmente antes de hacer push:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `out/`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
