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
  tpv: {
    title: 'Planes del TPV',
    intro: 'Suscripción mensual. Elige el plan según lo que necesite tu restaurante.',
    note: 'Los planes del TPV se contratan mediante suscripción mensual.',
  },
  web: {
    title: 'Creación de tu web',
    intro: 'Pago único. Solo el pack Profesional, que se conecta con el TPV EasyHost, incluye además una cuota mensual.',
    oneOffLabel: 'pago único',
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
    price: '[Precio]',
    description: 'Lo esencial para llevar la sala, las reservas y la caja del día.',
    features: ['TPV', 'Plano de salas', 'Reservas', 'Comandero', 'Cierre diario'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '[Precio]',
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
    price: '[Precio]',
    description: 'Para quien gestiona varios locales y quiere el control completo.',
    includesPrevious: 'Todo lo del Plan Profesional, más:',
    features: ['Multi-restaurante', 'Control de stock', 'CRM', 'Analítica completa'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
];

/* ------------------------------------------------------------------ */
/* 2. Packs de creación de web (pago único)                            */
/* ------------------------------------------------------------------ */

export type WebPack = {
  id: string;
  name: string;
  /** Pago único. `null` = "A presupuestar". */
  price: string | null;
  /** Cuota mensual adicional. Déjalo sin poner si el pack es solo pago único. */
  monthly?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
};

export const webPacks: WebPack[] = [
  {
    id: 'simple',
    name: 'Simple',
    price: '390',
    description: 'Una web de una sola página (One Page) con la información de tu restaurante.',
    features: ['Web One Page'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'avanzada',
    name: 'Avanzada',
    price: '590',
    description: 'Tu web con reservas y pedidos online.',
    features: ['Reservas online', 'Pedidos online'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '890',
    monthly: '[Cuota]',
    description: 'Tu web conectada con el TPV EasyHost.',
    features: ['Conexión con el TPV', 'Soporte prioritario'],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'personalizada',
    name: 'Personalizada',
    price: null,
    description: 'Para proyectos con necesidades propias. Lo hablamos y te preparamos un presupuesto.',
    features: [],
    cta: { label: 'Pedir presupuesto', href: '#contacto' },
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
