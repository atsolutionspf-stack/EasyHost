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
      description: 'Lo esencial para llevar la sala, las reservas y la caja del día.',
      features: ['TPV', 'Plano de salas', 'Reservas', 'Comandero', 'Cierre diario'],
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Profesional',
      price: prices.profesional,
      description: 'Sala y cocina conectadas, pedidos online y Verifactu.',
      includesPrevious: 'Todo lo del Plan Básico, más:',
      features: ['KDS de cocina', 'Modo offline', 'Verifactu', 'Analítica básica', 'Pedidos online', 'Comandero QR'],
      cta: { label: 'Solicitar información', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'personalizado',
      name: 'Personalizado',
      price: null,
      description: 'Para varios locales o necesidades propias. Lo adaptamos a tu negocio.',
      includesPrevious: 'Todo lo del Plan Profesional, más:',
      features: ['Multi-restaurante', 'Control de stock', 'CRM', 'Analítica completa'],
      cta: { label: 'Pedir presupuesto', href: '#contacto' },
    },
  ],
  en: [
    {
      id: 'basico',
      name: 'Basic',
      price: prices.basico,
      description: 'The essentials to run the floor, bookings and the day’s cash-up.',
      features: ['POS', 'Floor plan', 'Bookings', 'Order taking', 'Daily cash-up'],
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Professional',
      price: prices.profesional,
      description: 'Front of house and kitchen connected, online orders and Verifactu.',
      includesPrevious: 'Everything in Basic, plus:',
      features: [
        'Kitchen display (KDS)',
        'Offline mode',
        'Verifactu',
        'Basic analytics',
        'Online orders',
        'QR ordering',
      ],
      cta: { label: 'Get information', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'personalizado',
      name: 'Custom',
      price: null,
      description: 'For several venues or specific needs. We tailor it to your business.',
      includesPrevious: 'Everything in Professional, plus:',
      features: ['Multi-restaurant', 'Stock control', 'CRM', 'Full analytics'],
      cta: { label: 'Request a quote', href: '#contacto' },
    },
  ],
});
