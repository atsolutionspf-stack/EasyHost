# Clientia: landing page comercial

Landing page *one page* de Clientia, construida con Vite, React y TypeScript. Es un proyecto independiente y no tiene ninguna conexión con Supabase ni con el SaaS.

## Puesta en marcha

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # versión de producción en /dist
npm run preview   # previsualiza /dist
```

## Idiomas

La web tiene dos versiones con el mismo diseño:

- **Español:** `/` (archivo `index.html`)
- **Inglés:** `/en/` (archivo `en/index.html`)

Cada archivo de `src/config` tiene los textos de los dos idiomas, en los bloques `es` y `en`. Si cambias un texto en un idioma, cámbialo también en el otro.

## Dónde cambiar cada cosa

| Qué quieres cambiar | Archivo |
| --- | --- |
| **Precios** (TPV, packs de web, hora de mantenimiento). Se cambian una sola vez, en el bloque `prices`, y valen para los dos idiomas | `src/config/plans.ts` |
| **Textos de los packs, del TPV y de los servicios adicionales** | `src/config/plans.ts` (bloques `es` y `en`) |
| **Funcionalidades** (añadir, quitar o reordenar) | `src/config/features.ts` |
| **Textos** de hero, problema/solución, pasos, ventajas y CTA final | `src/config/content.ts` |
| **Botones, formulario, menú y mockup del panel** | `src/config/ui.ts` |
| **Navegación, logotipo, contacto, enlaces legales y destino del formulario** | `src/config/site.ts` |
| **Colores, tipografía y espaciados** | `src/styles/tokens.css` |
| **SEO** (title, description, Open Graph, dominio) | `index.html` (español) y `en/index.html` (inglés) |
| **Imagen para redes sociales** (1200×630) | `public/og-image.png` y `public/og-image-en.png` |
| **Páginas legales** | Español: `public/aviso-legal/`, `public/politica-de-privacidad/`, `public/politica-de-cookies/`. Inglés: `public/en/legal-notice/`, `public/en/privacy-policy/`, `public/en/cookie-policy/` |

### Funcionalidades «Próximamente»

En `src/config/plans.ts` y `src/config/features.ts`, una funcionalidad escrita como `{ label: 'Integraciones de delivery', soon: true }` se muestra con la etiqueta «Próximamente». Cuando esté lista y validada, quita `soon: true`. No anuncies como disponible nada que todavía no funcione (por ejemplo, VeriFactu o las integraciones con plataformas externas).

### Placeholders

Cualquier texto escrito entre corchetes, como `[Precio]` o `[Teléfono de contacto]`, se muestra en la web con un borde discontinuo, para que no se publique por error. Al escribir el valor real, el borde desaparece.

### Logotipo

Coloca el archivo en `public/` (por ejemplo `public/logo.svg`) y en `src/config/site.ts` escribe `logoSrc: '/logo.svg'`.

### Formulario de demo

En `src/config/site.ts`, en `contact.formEndpoint`:

- **`null`** (valor actual): al enviar, se abre el correo del visitante con la solicitud ya redactada para `contact.email`.
- **Una URL**: los datos se envían por `POST` en JSON (`name`, `restaurant`, `email`, `phone`, `message`, `source`). Sirve, por ejemplo, para una Edge Function de Supabase, Formspree o un webhook.

La lógica está en `src/lib/contact.ts`.

## Estructura

```
src/
  config/        datos editables (planes, funcionalidades, textos, sitio)
  components/    secciones de la página
    ui/          piezas reutilizables (Button, Logo, SectionHeader, Placeholder)
  hooks/         animación al hacer scroll y sección activa del menú
  lib/           envío del formulario
  styles/        tokens, base y estilos de secciones
```
