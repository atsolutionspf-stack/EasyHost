/**
 * Configuración general del sitio: marca, navegación, contacto y enlaces legales.
 * Los textos están en español (`es`) y en inglés (`en`).
 *
 * Los valores entre corchetes [ ... ] son PLACEHOLDERS: sustitúyelos antes de publicar.
 */
import { pick } from '../i18n';

/* Datos comunes a los dos idiomas */
const shared = {
  name: 'EasyHost',
  /**
   * Logotipo. Déjalo en `null` para usar el logotipo de texto.
   * Para usar una imagen, colócala en /public (p. ej. /public/logo.svg) y escribe aquí '/logo.svg'.
   */
  logoSrc: null as string | null,
  /** Email que recibe las solicitudes de demo (también se usa si no hay endpoint). */
  email: 'contacto@easyhost.example',
  /**
   * URL a la que el formulario enviará los datos en JSON (POST).
   * Puede ser una Edge Function de Supabase, Formspree, un webhook, etc.
   * Si es `null`, el formulario abre el cliente de correo con la solicitud ya redactada.
   */
  formEndpoint: null as string | null,
  /**
   * Web de Lintel (venta de webs). Cambia aquí la dirección cuando tenga dominio definitivo.
   * Se usa en la línea bajo los precios y en el pie de página.
   */
  lintelUrl: 'https://lintel.atsolutionspf.workers.dev',
};

export const siteConfig = pick({
  es: {
    brand: {
      name: shared.name,
      logoSrc: shared.logoSrc,
      tagline:
        'TPV para restaurantes, bares, cafeterías y negocios de hostelería: sala, cocina, reservas, pedidos online y cierre de caja.',
    },
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Precios', href: '#precios' },
      { label: 'Contacto', href: '#contacto' },
    ],
    primaryCta: { label: 'Solicitar una demo', href: '#contacto' },
    contact: {
      email: shared.email,
      phone: '[Teléfono de contacto]',
      address: '[Dirección o ciudad]',
      formEndpoint: shared.formEndpoint,
    },
    lintel: { url: `${shared.lintelUrl}/`, footerLabel: 'Webs a medida: Lintel' },
    legal: [
      { label: 'Aviso legal', href: '/aviso-legal/' },
      { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
      { label: 'Política de cookies', href: '/politica-de-cookies/' },
    ],
  },
  en: {
    brand: {
      name: shared.name,
      logoSrc: shared.logoSrc,
      tagline:
        'POS system for restaurants, bars, cafés and hospitality businesses: front of house, kitchen, bookings, online orders and end-of-day cash-up.',
    },
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'Features', href: '#funcionalidades' },
      { label: 'How it works', href: '#como-funciona' },
      { label: 'Pricing', href: '#precios' },
      { label: 'Contact', href: '#contacto' },
    ],
    primaryCta: { label: 'Book a demo', href: '#contacto' },
    contact: {
      email: shared.email,
      phone: '[Contact phone]',
      address: '[Address or city]',
      formEndpoint: shared.formEndpoint,
    },
    lintel: { url: `${shared.lintelUrl}/en/`, footerLabel: 'Custom websites: Lintel' },
    legal: [
      { label: 'Legal notice', href: '/en/legal-notice/' },
      { label: 'Privacy policy', href: '/en/privacy-policy/' },
      { label: 'Cookie policy', href: '/en/cookie-policy/' },
    ],
  },
});

export type NavItem = (typeof siteConfig.nav)[number];
