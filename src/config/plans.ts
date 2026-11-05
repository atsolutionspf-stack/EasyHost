/**
 * PRECIOS: PACKS DE WEB, TPV Y SERVICIOS ADICIONALES
 * ---------------------------------------------------
 * 1) Para cambiar un PRECIO, cámbialo solo en el bloque `prices` de aquí abajo.
 *    Vale para las dos versiones de la web (español e inglés).
 *    Escribe el número entre comillas y sin el símbolo €: por ejemplo '40'.
 * 2) Para cambiar los TEXTOS de los packs, del TPV o de los servicios, edita los
 *    bloques `es` (español) y `en` (inglés) más abajo.
 *
 * La sección de precios (src/components/Pricing.tsx) se adapta sola.
 * Un texto entre corchetes, como "[Precio]", se ve resaltado como pendiente.
 */
import { pick } from '../i18n';

/* ================================================================== */
/* PRECIOS (comunes a los dos idiomas)                                 */
/* ================================================================== */
export const prices = {
  /** Suscripción mensual del TPV. */
  tpvMonthly: '40',
  /** Packs de creación de web (pago único). */
  packSimple: '390',
  packAvanzada: '590',
  packProfesional: '890',
  /** Servicio adicional: hora de mantenimiento. */
  maintenanceHour: '30',
};

/* ================================================================== */
/* Tipos (no hace falta tocarlos)                                      */
/* ================================================================== */
export type WebPack = {
  id: string;
  name: string;
  /** Pago único. `null` = sin precio: se muestra un botón de contacto. */
  price: string | null;
  /** true = además del pago único lleva la suscripción mensual del TPV. */
  includesTpv: boolean;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export type TpvPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export type Addon = { id: string; name: string; price: string; unit: string; description: string };

/* ================================================================== */
/* TEXTOS                                                              */
/* ================================================================== */
export const pricingConfig = pick({
  es: {
    period: '/mes',
    web: {
      title: 'Creación de tu web',
      intro:
        'Simple y Avanzada se pagan una sola vez, sin suscripción. El pack Profesional incluye el TPV: pago único más la suscripción mensual del TPV.',
      oneOffLabel: 'pago único',
      noSubscriptionLabel: 'Sin suscripción',
      /** {precio} se sustituye por el precio del TPV. */
      subscriptionLabel: '+ suscripción del TPV: {precio}/mes',
      customPriceLabel: 'Precio a medida',
    },
    tpv: {
      title: 'Suscripción del TPV',
      intro: 'Una única suscripción mensual con todo el TPV y su mantenimiento. Es la que se suma al pago único del pack Profesional.',
      note: 'El TPV se contrata mediante suscripción mensual.',
    },
    addons: {
      title: 'Servicios adicionales',
      intro: 'Para cuando necesites algo más, sin cambiar de pack.',
    },
  },
  en: {
    period: '/month',
    web: {
      title: 'Your website',
      intro:
        'Simple and Advanced are a one-off payment, with no subscription. The Professional pack includes the POS: a one-off payment plus the monthly POS subscription.',
      oneOffLabel: 'one-off payment',
      noSubscriptionLabel: 'No subscription',
      subscriptionLabel: '+ POS subscription: {precio}/month',
      customPriceLabel: 'Tailored pricing',
    },
    tpv: {
      title: 'POS subscription',
      intro: 'One monthly subscription with the full POS and its maintenance. It’s added to the one-off payment of the Professional pack.',
      note: 'The POS is billed as a monthly subscription.',
    },
    addons: {
      title: 'Extra services',
      intro: 'For when you need a little more, without changing your pack.',
    },
  },
});

export const webPacks: WebPack[] = pick<WebPack[]>({
  es: [
    {
      id: 'simple',
      name: 'Simple',
      price: prices.packSimple,
      includesTpv: false,
      description: 'Una web de una sola página (One Page) con la información de tu restaurante.',
      features: ['Web One Page'],
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'avanzada',
      name: 'Avanzada',
      price: prices.packAvanzada,
      includesTpv: false,
      description: 'Tu web con reservas y pedidos online, y más ventajas para tus clientes.',
      features: ['Reservas online', 'Pedidos online', 'Carta digital'],
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Profesional',
      price: prices.packProfesional,
      includesTpv: true,
      description: 'Tu web con el TPV EasyHost y el CRM completos, todo conectado.',
      features: ['TPV EasyHost conectado a tu web', 'CRM completo', 'Soporte prioritario'],
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'personalizada',
      name: 'Personalizada',
      price: null,
      includesTpv: false,
      description: 'Para proyectos con necesidades propias. Cuéntanos qué necesitas y te preparamos un presupuesto.',
      features: [],
      cta: { label: 'Pedir presupuesto', href: '#contacto' },
    },
  ],
  en: [
    {
      id: 'simple',
      name: 'Simple',
      price: prices.packSimple,
      includesTpv: false,
      description: 'A single-page (one-page) website with your restaurant’s information.',
      features: ['One-page website'],
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'avanzada',
      name: 'Advanced',
      price: prices.packAvanzada,
      includesTpv: false,
      description: 'Your website with online bookings and orders, plus extra perks for your customers.',
      features: ['Online bookings', 'Online orders', 'Digital menu'],
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'profesional',
      name: 'Professional',
      price: prices.packProfesional,
      includesTpv: true,
      description: 'Your website with the full EasyHost POS and CRM, all connected.',
      features: ['EasyHost POS connected to your website', 'Full CRM', 'Priority support'],
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'personalizada',
      name: 'Custom',
      price: null,
      includesTpv: false,
      description: 'For projects with their own requirements. Tell us what you need and we’ll prepare a quote.',
      features: [],
      cta: { label: 'Request a quote', href: '#contacto' },
    },
  ],
});

export const tpvPlan: TpvPlan = pick<TpvPlan>({
  es: {
    name: 'TPV EasyHost',
    price: prices.tpvMonthly,
    description: 'Todo el TPV en una sola suscripción, con su mantenimiento incluido.',
    features: [
      'TPV y plano de salas',
      'Comandero y comandero QR',
      'KDS de cocina',
      'Reservas',
      'Pedidos online',
      'Cierre diario de caja',
      'Verifactu',
      'Modo offline',
      'Analítica',
      'Control de stock',
      'CRM',
      'Multi-restaurante',
    ],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  en: {
    name: 'EasyHost POS',
    price: prices.tpvMonthly,
    description: 'The whole POS in a single subscription, with maintenance included.',
    features: [
      'POS and floor plan',
      'Order taking, including QR ordering',
      'Kitchen display (KDS)',
      'Bookings',
      'Online orders',
      'Daily cash-up',
      'Verifactu',
      'Offline mode',
      'Analytics',
      'Stock control',
      'CRM',
      'Multi-restaurant',
    ],
    cta: { label: 'Get information', href: '#contacto' },
  },
});

export const addons: Addon[] = pick<Addon[]>({
  es: [
    {
      id: 'hora-mantenimiento',
      name: 'Hora de mantenimiento',
      price: prices.maintenanceHour,
      unit: '/hora',
      description: 'Cambios en tu web o en tu carta, actualizaciones y ajustes. Se contrata por horas cuando lo necesites.',
    },
  ],
  en: [
    {
      id: 'hora-mantenimiento',
      name: 'Maintenance hour',
      price: prices.maintenanceHour,
      unit: '/hour',
      description: 'Changes to your website or menu, updates and tweaks. Booked by the hour, whenever you need it.',
    },
  ],
});
