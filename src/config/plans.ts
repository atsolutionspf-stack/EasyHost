/**
 * PLANES DEL TPV (SUSCRIPCIÓN MENSUAL)
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
  premium: '30',
};

/* ================================================================== */
/* Tipos (no hace falta tocarlos)                                      */
/* ================================================================== */
export type Plan = {
  id: string;
  name: string;
  /** Precio mensual, sin símbolo €. */
  price: string;
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
    note: 'Todos los planes del TPV se contratan mediante suscripción mensual.',
  },
  en: {
    period: '/month',
    planPrefix: '',
    highlightLabel: 'Recommended',
    note: 'All POS plans are billed as a monthly subscription.',
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
      id: 'premium',
      name: 'Premium',
      price: prices.premium,
      description: 'Para quien gestiona varios locales y quiere el control completo.',
      includesPrevious: 'Todo lo del Plan Profesional, más:',
      features: ['Multi-restaurante', 'Control de stock', 'CRM', 'Analítica completa'],
      cta: { label: 'Solicitar información', href: '#contacto' },
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
      id: 'premium',
      name: 'Premium',
      price: prices.premium,
      description: 'For owners running several venues who want full control.',
      includesPrevious: 'Everything in Professional, plus:',
      features: ['Multi-restaurant', 'Stock control', 'CRM', 'Full analytics'],
      cta: { label: 'Get information', href: '#contacto' },
    },
  ],
});
