# Drama Online — sitio web

Sitio estático (Next.js, `output: "export"`) con inicio, política de privacidad, términos y borrado de datos,
en español e inglés. Lo exigen las revisiones de apps de Google (YouTube), TikTok y Meta.

- Publicado en GitHub Pages: `https://miisaelcabrera.github.io/drama-online/`
- **Compila GitHub Actions** ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)) en cada push a `main`; la laptop no compila.
- Sin cookies, sin analítica, sin formularios.

## Editar
- Nombre, canales, **correo de contacto** y fecha: [`site.config.ts`](site.config.ts). Con `contactEmail` vacío se muestra "contacto próximamente".
- Textos: [`content/pages.tsx`](content/pages.tsx) (es/en). Borrador basado en lo que hace el proyecto, **no es asesoría legal**.
- Al cambiar un texto legal, actualizar `lastUpdated`.

## Local (opcional; ~1.1 GB de RAM, ~30 s)
```bash
pnpm install && pnpm build   # genera out/ con basePath /drama-online
```

## Antes de enviar a revisión
- [x] Correo del proyecto en `contactEmail` (fogatales@gmail.com)
- [ ] Dominio propio (Google pide verificarlo): cambiar `basePath` a `""` y configurar el dominio en Pages
