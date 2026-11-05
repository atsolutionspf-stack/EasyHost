/**
 * PLANES DEL TPV: DOS SUSCRIPCIONES MENSUALES Y UN PLAN PERSONALIZADO
 * ------------------------------------
 * 1) Para cambiar un PRECIO, cámbialo solo en el bloque `prices` de aquí abajo.
 *    Vale para las dos versiones de la web (español e inglés).
 *    Escribe el número entre comillas y sin el símbolo €: por ejemplo '25'.
 * 2) Para cambiar los TEXTOS de los planes, edita los bloques `es` (español)
 *    y `en` (inglés) más abajo.
 *
 * La sección de precios (src/components/Pricing.tsx) se adapta sola.
 * Un texto entre corchetes, como "[Precio]", se ve resaltado como pendiente.
 */
import { pick } from '../i18n';

/* ================================================================== */
/* PRECIOS MENSUALES (comunes a los dos idiomas)                       */
/* ================================================================== */
export const prices = {
  basico: '15',
  profesional: '25',
  // El plan Personalizado no tiene precio: muestra un botón de presupuesto.
};

/* ================================================================== */
/* Tipos (no hace falta tocarlos)                                      */
/* ================================================================== */
export type Plan = {
  id: string;
  name: string;
  /** Precio mensual, sin símbolo €. `null` = sin precio (plan a medida, con botón de contacto). */
  price: string | null;
  description: string;
  /** Primera línea en negrita, p. ej. "Todo lo del Plan Básico, más:". Opcional. */
  includesPrevious?: string;
  features: string[];
  cta: { label: string; href: string };
  /** Marca el plan como recomendado (diseño destacado). Usa solo uno. */
  highlighted?: boolean;
};

/* ================================================================== */
/* TEXTOS                                                              */
/* ================================================================== */
export const pricingConfig = pick({
  es: {
    period: '/mes',
    planPrefix: 'Plan',
    highlightLabel: 'Recomendado',
    customPriceLabel: 'A medida',
    customPriceNote: 'Precio según tu proyecto',
    note: 'Los planes Básico y Profesional se contratan mediante suscripción mensual.',
    /** Línea bajo los planes que enlaza con Lintel (la URL está en site.ts). */
    lintel: { before: '¿También necesitas una web? La hacemos con ', name: 'Lintel', after: ', conectada a tu TPV.', link: 'Ver Lintel' },
  },
  en: {
    period: '/month',
    planPrefix: '',
    highlightLabel: 'Recommended',
    customPriceLabel: 'Tailored',
    customPriceNote: 'Priced to your project',
    note: 'Basic and Professional are billed as a monthly subscription.',
    lintel: { before: 'Need a website too? We build it with ', name: 'Lintel', after: ', connected to your POS.', link: 'Visit Lintel' },
  },
});

export const plans: Plan[] = pick<Plan[]>({
  es: [
    {
      id: 'basico',
      name: 'Básico',
      price: prices.basico,
      description: 'Lo esencial para vender, cobrar y cerrar la caja del día.',
      features: ['TPV', 'Reservas', 'Cierre diario', 'Plano de salas (hostelería)', 'Comandero (hostelería)'],
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Profesional',
      price: prices.profesional,
      description: 'Pedidos online, Verifactu, analítica y modo offline.',
      includesPrevious: 'Todo lo del Plan Básico, más:',
      features: ['Pedidos online', 'Verifactu', 'Analítica básica', 'Modo offline', 'KDS de cocina (hostelería)', 'Comandero QR (hostelería)'],
      cta: { label: 'Solicitar información', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'personalizado',
      name: 'Personalizado',
      price: null,
      description: 'Para varios locales o necesidades propias. Lo adaptamos a tu negocio.',
      includesPrevious: 'Todo lo del Plan Profesional, más:',
      features: ['Multi-local', 'Control de stock', 'CRM', 'Analítica completa'],
      cta: { label: 'Pedir presupuesto', href: '#contacto' },
    },
  ],
  en: [
    {
      id: 'basico',
      name: 'Basic',
      price: prices.basico,
      description: 'The essentials to sell, take payments and cash up each day.',
      features: ['POS', 'Bookings', 'Daily cash-up', 'Floor plan (hospitality)', 'Order taking (hospitality)'],
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Professional',
      price: prices.profesional,
      description: 'Online orders, Verifactu, analytics and offline mode.',
      includesPrevious: 'Everything in Basic, plus:',
      features: [
        'Online orders',
        'Verifactu',
        'Basic analytics',
        'Offline mode',
        'Kitchen display (hospitality)',
        'QR ordering (hospitality)',
      ],
      cta: { label: 'Get information', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'personalizado',
      name: 'Custom',
      price: null,
      description: 'For several locations or specific needs. We tailor it to your business.',
      includesPrevious: 'Everything in Professional, plus:',
      features: ['Multi-location', 'Stock control', 'CRM', 'Full analytics'],
      cta: { label: 'Request a quote', href: '#contacto' },
    },
  ],
});
