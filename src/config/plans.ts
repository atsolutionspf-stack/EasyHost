/**
 * PLANES, COMPARATIVA Y ADD-ONS
 * -----------------------------
 * 1) PRECIOS: cámbialos solo en el bloque `prices`. Valen para los dos idiomas.
 *    Escribe el número entre comillas y sin el símbolo €: por ejemplo '19'.
 * 2) TEXTOS: edita los bloques `es` (español) y `en` (inglés).
 * 3) «PRÓXIMAMENTE»: una funcionalidad escrita así { label: '…', soon: true }
 *    se muestra con la etiqueta «Próximamente». Cuando esté lista y validada,
 *    quita `soon: true` (o escríbela como texto normal entre comillas).
 *    No anuncies como disponible nada que todavía no funcione.
 *
 * La sección de precios (src/components/Pricing.tsx) se adapta sola.
 */
import { pick } from '../i18n';

/* ================================================================== */
/* PRECIOS (comunes a los dos idiomas, sin IVA)                        */
/* ================================================================== */
export const prices = {
  essential: '19',
  professional: '39',
  addonWebsite: '29',
  addonWhatsapp: '19',
  addonAiAgent: '39',
  addonBookingIntegrations: '19',
  addonLoyalty: '12',
};

/* ================================================================== */
/* Tipos (no hace falta tocarlos)                                      */
/* ================================================================== */
export type FeatureItem = string | { label: string; soon?: boolean };

export type Plan = {
  id: string;
  name: string;
  /** Precio mensual sin €. `null` = sin precio (plan a medida, con botón de presupuesto). */
  price: string | null;
  tagline: string;
  description: string;
  /** Primera línea en negrita, p. ej. "Todo Essential, más:". Opcional. */
  includesPrevious?: string;
  features: FeatureItem[];
  /** Línea final, p. ej. "1 establecimiento". */
  limit?: string;
  cta: { label: string; href: string };
  highlighted?: boolean;
};

export type CompareRow = { label: string; essential: string | boolean; professional: string | boolean };

export type Addon = {
  id: string;
  name: string;
  /** Precio sin €; `null` = presupuesto. */
  price: string | null;
  /** true = «desde X €/mes». */
  from?: boolean;
  description: string;
  soon?: boolean;
  /** Texto de un enlace a la web de Lintel (la URL está en site.ts). */
  lintelLink?: string;
};

/* ================================================================== */
/* TEXTOS                                                              */
/* ================================================================== */
export const pricingConfig = pick({
  es: {
    period: '/mes',
    planPrefix: '',
    highlightLabel: 'Más completo',
    customPriceLabel: 'Presupuesto',
    customPriceNote: 'Según tus locales y necesidades',
    note: 'Precios sin IVA. Essential y Professional se contratan mediante suscripción mensual.',
    soon: 'Próximamente',
    soonNote: 'Las funciones marcadas como «Próximamente» están en desarrollo y se activarán cuando estén listas y validadas.',
    compare: { title: 'Comparativa rápida', feature: 'Funcionalidad', included: 'Incluido', notIncluded: 'No incluido' },
    addons: {
      title: 'Add-ons opcionales',
      intro: 'Amplía tu plan cuando lo necesites, sin cambiar de plan.',
      from: 'desde',
      quote: 'Presupuesto',
    },
  },
  en: {
    period: '/month',
    planPrefix: '',
    highlightLabel: 'Most complete',
    customPriceLabel: 'Quote',
    customPriceNote: 'Based on your locations and needs',
    note: 'Prices exclude VAT. Essential and Professional are billed as a monthly subscription.',
    soon: 'Coming soon',
    soonNote: 'Features marked “Coming soon” are in development and will be enabled once they are ready and validated.',
    compare: { title: 'Quick comparison', feature: 'Feature', included: 'Included', notIncluded: 'Not included' },
    addons: {
      title: 'Optional add-ons',
      intro: 'Extend your plan whenever you need to, without switching plans.',
      from: 'from',
      quote: 'Quote',
    },
  },
});

export const plans: Plan[] = pick<Plan[]>({
  es: [
    {
      id: 'essential',
      name: 'Essential',
      price: prices.essential,
      tagline: 'Todo lo esencial',
      description: 'Todo lo necesario para gestionar tu negocio desde una sola plataforma.',
      features: [
        'TPV y cobros',
        'Caja y cierre diario',
        'Modo offline',
        'Reservas y asignación de mesas',
        'Pedidos online',
        'Carta o catálogo digital',
        'Plano interactivo de mesas (hostelería)',
        'Analíticas de ventas y pedidos',
        'Stock básico',
        'Usuarios y permisos básicos',
        { label: 'Integraciones de delivery', soon: true },
        { label: 'Facturación conforme a normativa (VeriFactu)', soon: true },
      ],
      limit: '1 establecimiento',
      cta: { label: 'Solicitar información', href: '#contacto' },
    },
    {
      id: 'professional',
      name: 'Professional',
      price: prices.professional,
      tagline: 'Más control y automatización',
      description: 'Para optimizar el servicio y gestionar varios locales.',
      includesPrevious: 'Todo Essential, más:',
      features: [
        'Pedidos y comandas por mesa (hostelería)',
        'Comandero digital para el personal',
        'Carta y pedidos por QR',
        'KDS: pantalla de cocina (hostelería)',
        'Reservas avanzadas',
        'Stock avanzado y escandallos',
        'Gestión de turnos y personal',
        'Analíticas avanzadas',
        'Informes de rentabilidad',
        'Automatizaciones operativas',
      ],
      limit: 'Hasta 3 establecimientos incluidos',
      cta: { label: 'Solicitar información', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'custom',
      name: 'Custom',
      price: null,
      tagline: 'Solución a medida',
      description: 'Para cadenas, franquicias y negocios con necesidades específicas.',
      includesPrevious: 'Todo Professional, más:',
      features: [
        'Más de 3 establecimientos',
        'Integraciones personalizadas',
        'Automatizaciones personalizadas',
        'Informes consolidados por grupo',
        'Onboarding y formación',
        'Soporte adaptado',
        { label: 'Agentes de IA a medida', soon: true },
      ],
      cta: { label: 'Pedir presupuesto', href: '#contacto' },
    },
  ],
  en: [
    {
      id: 'essential',
      name: 'Essential',
      price: prices.essential,
      tagline: 'All the essentials',
      description: 'Everything you need to run your business from a single platform.',
      features: [
        'POS and payments',
        'Till and daily cash-up',
        'Offline mode',
        'Bookings and table allocation',
        'Online orders',
        'Digital catalogue or menu',
        'Interactive floor plan (hospitality)',
        'Sales and order analytics',
        'Basic stock',
        'Basic users and permissions',
        { label: 'Delivery integrations', soon: true },
        { label: 'Compliant invoicing (VeriFactu)', soon: true },
      ],
      limit: '1 location',
      cta: { label: 'Get information', href: '#contacto' },
    },
    {
      id: 'professional',
      name: 'Professional',
      price: prices.professional,
      tagline: 'More control and automation',
      description: 'To streamline service and manage several locations.',
      includesPrevious: 'Everything in Essential, plus:',
      features: [
        'Orders and tickets by table (hospitality)',
        'Digital order taking for staff',
        'QR menu and ordering',
        'KDS: kitchen display (hospitality)',
        'Advanced bookings',
        'Advanced stock and recipe costing',
        'Shift and staff management',
        'Advanced analytics',
        'Profitability reports',
        'Operational automations',
      ],
      limit: 'Up to 3 locations included',
      cta: { label: 'Get information', href: '#contacto' },
      highlighted: true,
    },
    {
      id: 'custom',
      name: 'Custom',
      price: null,
      tagline: 'Tailored solution',
      description: 'For chains, franchises and businesses with specific needs.',
      includesPrevious: 'Everything in Professional, plus:',
      features: [
        'More than 3 locations',
        'Custom integrations',
        'Custom automations',
        'Consolidated group reports',
        'Onboarding and training',
        'Tailored support',
        { label: 'Custom AI agents', soon: true },
      ],
      cta: { label: 'Request a quote', href: '#contacto' },
    },
  ],
});

/** Comparativa rápida Essential / Professional. `true` = incluido, `false` = no, texto = nivel. */
export const compareRows: CompareRow[] = pick<CompareRow[]>({
  es: [
    { label: 'TPV y caja', essential: true, professional: true },
    { label: 'Modo offline', essential: true, professional: true },
    { label: 'Reservas', essential: true, professional: 'Avanzadas' },
    { label: 'Pedidos online', essential: true, professional: true },
    { label: 'Plano interactivo de mesas', essential: true, professional: true },
    { label: 'Cierre de caja', essential: true, professional: true },
    { label: 'Analíticas', essential: 'Básicas', professional: 'Avanzadas' },
    { label: 'Inventario', essential: 'Básico', professional: 'Avanzado' },
    { label: 'Pedidos y comandas por mesa', essential: false, professional: true },
    { label: 'Comandero para el personal', essential: false, professional: true },
    { label: 'Carta y pedidos por QR', essential: false, professional: true },
    { label: 'KDS de cocina', essential: false, professional: true },
    { label: 'Turnos y personal', essential: false, professional: true },
    { label: 'Establecimientos', essential: '1', professional: 'Hasta 3' },
  ],
  en: [
    { label: 'POS and till', essential: true, professional: true },
    { label: 'Offline mode', essential: true, professional: true },
    { label: 'Bookings', essential: true, professional: 'Advanced' },
    { label: 'Online orders', essential: true, professional: true },
    { label: 'Interactive floor plan', essential: true, professional: true },
    { label: 'Daily cash-up', essential: true, professional: true },
    { label: 'Analytics', essential: 'Basic', professional: 'Advanced' },
    { label: 'Inventory', essential: 'Basic', professional: 'Advanced' },
    { label: 'Orders and tickets by table', essential: false, professional: true },
    { label: 'Staff order taking', essential: false, professional: true },
    { label: 'QR menu and ordering', essential: false, professional: true },
    { label: 'Kitchen display (KDS)', essential: false, professional: true },
    { label: 'Shifts and staff', essential: false, professional: true },
    { label: 'Locations', essential: '1', professional: 'Up to 3' },
  ],
});

export const addons: Addon[] = pick<Addon[]>({
  es: [
    {
      id: 'web',
      name: 'Página web propia conectada',
      price: prices.addonWebsite,
      description: 'Tu web con reservas y pedidos conectados a Clientia. La diseñamos con Lintel.',
      lintelLink: 'Ver Lintel',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp y recordatorios automáticos',
      price: prices.addonWhatsapp,
      from: true,
      description: 'Confirmaciones y recordatorios para reducir ausencias.',
      soon: true,
    },
    {
      id: 'ai',
      name: 'Agente de IA para reservas y atención',
      price: prices.addonAiAgent,
      from: true,
      description: 'Responde dudas y gestiona reservas a cualquier hora.',
      soon: true,
    },
    {
      id: 'booking-integrations',
      name: 'Integraciones avanzadas de reservas',
      price: prices.addonBookingIntegrations,
      from: true,
      description: 'Conexión con plataformas de reservas compatibles.',
      soon: true,
    },
    {
      id: 'loyalty',
      name: 'Fidelización y gamificación',
      price: prices.addonLoyalty,
      description: 'Premia a tus clientes habituales para que vuelvan.',
      soon: true,
    },
    {
      id: 'setup',
      name: 'Implantación y hardware',
      price: null,
      description: 'Puesta en marcha, formación y equipos. Pago único según tu proyecto.',
    },
  ],
  en: [
    {
      id: 'web',
      name: 'Your own connected website',
      price: prices.addonWebsite,
      description: 'Your website with bookings and orders connected to Clientia. Designed with Lintel.',
      lintelLink: 'Visit Lintel',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp and automatic reminders',
      price: prices.addonWhatsapp,
      from: true,
      description: 'Confirmations and reminders to reduce no-shows.',
      soon: true,
    },
    {
      id: 'ai',
      name: 'AI agent for bookings and support',
      price: prices.addonAiAgent,
      from: true,
      description: 'Answers questions and handles bookings around the clock.',
      soon: true,
    },
    {
      id: 'booking-integrations',
      name: 'Advanced booking integrations',
      price: prices.addonBookingIntegrations,
      from: true,
      description: 'Connection with compatible booking platforms.',
      soon: true,
    },
    {
      id: 'loyalty',
      name: 'Loyalty and gamification',
      price: prices.addonLoyalty,
      description: 'Reward your regulars so they keep coming back.',
      soon: true,
    },
    {
      id: 'setup',
      name: 'Set-up and hardware',
      price: null,
      description: 'Onboarding, training and equipment. One-off payment based on your project.',
    },
  ],
});
