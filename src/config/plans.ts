/**
 * PRECIOS: PLANES DEL TPV, PACKS DE WEB Y SERVICIOS ADICIONALES
 * --------------------------------------------------------------
 * Este es el único archivo que necesitas tocar para cambiar precios y servicios.
 * La sección de precios (src/components/Pricing.tsx) se adapta sola.
 *
 * Cualquier texto escrito entre corchetes, como "[Precio]", es un PLACEHOLDER:
 * se ve resaltado en la web para que no se publique por error. Cuando escribas
 * el valor real (por ejemplo price: '25'), el resaltado desaparece.
 *
 * Los precios se escriben sin el símbolo €, que se añade solo.
 */

/* ------------------------------------------------------------------ */
/* 1. Planes del TPV (suscripción mensual)                             */
/* ------------------------------------------------------------------ */

export type Plan = {
  id: string;
  name: string;
  /** Precio mensual. Ejemplo: '25' o '24,90'. */
  price: string;
  description: string;
  /** Primera línea en negrita, p. ej. "Todo lo del Plan Básico, más:". Opcional. */
  includesPrevious?: string;
  features: string[];
  cta: { label: string; href: string };
  /** Marca el plan como recomendado (diseño destacado). Usa solo uno. */
  highlighted?: boolean;
};

export const pricingConfig = {
  currency: '€',
  period: '/mes',
  highlightLabel: 'Recomendado',
  web: {
    title: 'Creación de tu web',
    intro: 'Simple y Avanzada se pagan una sola vez, sin suscripción. El pack Profesional incluye el TPV: pago único más la suscripción mensual del TPV.',
    oneOffLabel: 'pago único',
    noSubscriptionLabel: 'Sin suscripción',
    /** Texto de la suscripción del pack que incluye el TPV. {precio} se sustituye por el plan más barato. */
    subscriptionLabel: '+ suscripción del TPV desde {precio} €/mes',
  },
  tpv: {
    title: 'Planes del TPV',
    intro: 'Suscripción mensual del TPV EasyHost y su mantenimiento. Es la que se suma al pago único del pack Profesional.',
    note: 'Los planes del TPV se contratan mediante suscripción mensual.',
  },
  addons: {
    title: 'Servicios adicionales',
    intro: 'Para cuando necesites algo más, sin cambiar de plan.',
  },
};

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: '15',
    description: 'Lo esencial para llevar la sala, las reservas y la caja del día.',
    features: ['TPV', 'Plano de salas', 'Reservas', 'Comandero', 'Cierre diario'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '25',
    description: 'Sala y cocina conectadas, pedidos online y Verifactu.',
    includesPrevious: 'Todo lo del Plan Básico, más:',
    features: [
      'KDS de cocina',
      'Modo offline',
      'Verifactu',
      'Analítica básica',
      'Pedidos online',
      'Comandero QR',
    ],
    cta: { label: 'Solicitar información', href: '#contacto' },
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '30',
    description: 'Para quien gestiona varios locales y quiere el control completo.',
    includesPrevious: 'Todo lo del Plan Profesional, más:',
    features: ['Multi-restaurante', 'Control de stock', 'CRM', 'Analítica completa'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
];

/* ------------------------------------------------------------------ */
/* 2. Packs de creación de web                                         */
/* ------------------------------------------------------------------ */

export type WebPack = {
  id: string;
  name: string;
  /** Pago único. `null` = "A presupuestar". */
  price: string | null;
  /**
   * true = además del pago único lleva la suscripción mensual del TPV
   * (se muestra "desde X €/mes" con el precio del plan más barato).
   * false = solo pago único, sin suscripción.
   */
  includesTpv: boolean;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export const webPacks: WebPack[] = [
  {
    id: 'simple',
    name: 'Simple',
    price: '390',
    includesTpv: false,
    description: 'Una web de una sola página (One Page) con la información de tu restaurante.',
    features: ['Web One Page'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'avanzada',
    name: 'Avanzada',
    price: '590',
    includesTpv: false,
    description: 'Tu web con reservas y pedidos online, y más ventajas para tus clientes.',
    features: ['Reservas online', 'Pedidos online', 'Carta digital'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '890',
    includesTpv: true,
    description: 'Tu web con el TPV EasyHost y el CRM completos, todo conectado.',
    features: ['TPV EasyHost conectado a tu web', 'CRM completo', 'Soporte prioritario'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
];

/* ------------------------------------------------------------------ */
/* 3. Servicios adicionales (add-ons)                                  */
/* ------------------------------------------------------------------ */

export type Addon = {
  id: string;
  name: string;
  price: string;
  /** Unidad del precio, p. ej. '/hora'. */
  unit: string;
  description: string;
};

export const addons: Addon[] = [
  {
    id: 'hora-mantenimiento',
    name: 'Hora de mantenimiento',
    price: '30',
    unit: '/hora',
    description: 'Cambios en tu web o en tu carta, actualizaciones y ajustes. Se contrata por horas cuando lo necesites.',
  },
];
