/**
 * Configuración general del sitio: marca, navegación, contacto y enlaces legales.
 *
 * Los valores entre corchetes [ ... ] son PLACEHOLDERS: sustitúyelos antes de publicar.
 */

export const siteConfig = {
  brand: {
    name: 'EasyHost',
    /**
     * Logotipo. Déjalo en `null` para usar el logotipo de texto.
     * Para usar una imagen, colócala en /public (p. ej. /public/logo.svg) y escribe aquí '/logo.svg'.
     */
    logoSrc: null as string | null,
    tagline:
      'Software de gestión de reservas y pedidos online para restaurantes, bares, cafeterías y negocios de hostelería.',
  },

  /** Navegación principal. `href` apunta al id de cada sección. */
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ],

  /** Llamada a la acción principal, usada en navbar, hero y CTA final. */
  primaryCta: { label: 'Solicitar una demo', href: '#contacto' },

  contact: {
    /** Email que recibe las solicitudes de demo (también se usa como alternativa si no hay endpoint). */
    email: 'contacto@easyhost.example',
    phone: '[Teléfono de contacto]',
    address: '[Dirección o ciudad]',
    /**
     * URL a la que el formulario enviará los datos en JSON (POST).
     * Puede ser una Edge Function de Supabase, Formspree, un webhook, etc.
     * Si es `null`, el formulario abre el cliente de correo con la solicitud ya redactada.
     */
    formEndpoint: null as string | null,
  },

  legal: [
    { label: 'Aviso legal', href: '/aviso-legal/' },
    { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
    { label: 'Política de cookies', href: '/politica-de-cookies/' },
  ],
};

export type NavItem = (typeof siteConfig.nav)[number];
