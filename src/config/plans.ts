/**
 * PLANES Y PRECIOS
 * ----------------
 * Este es el único archivo que necesitas tocar para cambiar los planes.
 * El componente visual (src/components/Pricing.tsx) se adapta solo.
 *
 * Cualquier texto escrito entre corchetes, como "[Precio]", se considera un
 * PLACEHOLDER y se muestra resaltado en la web para que no se publique por error.
 * Cuando escribas el valor real (p. ej. price: '49'), el resaltado desaparece.
 */

export type Plan = {
  id: string;
  name: string;
  /** Precio mensual sin símbolo de moneda. Ejemplo: '49' o '49,90'. */
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  /** Marca el plan como recomendado (diseño destacado). Usa solo uno. */
  highlighted?: boolean;
};

export const pricingConfig = {
  currency: '€',
  period: '/mes',
  /** Nota que aparece bajo las tarjetas. */
  note: 'Todos los planes se contratan mediante suscripción mensual.',
  /** Etiqueta del plan destacado. */
  highlightLabel: 'Recomendado',
};

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: '[Precio]',
    description: '[Descripción breve del Plan Básico]',
    features: [
      '[Funcionalidad incluida 1]',
      '[Funcionalidad incluida 2]',
      '[Funcionalidad incluida 3]',
    ],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '[Precio]',
    description: '[Descripción breve del Plan Profesional]',
    features: [
      '[Funcionalidad incluida 1]',
      '[Funcionalidad incluida 2]',
      '[Funcionalidad incluida 3]',
      '[Funcionalidad incluida 4]',
    ],
    cta: { label: 'Solicitar información', href: '#contacto' },
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '[Precio]',
    description: '[Descripción breve del Plan Premium]',
    features: [
      '[Funcionalidad incluida 1]',
      '[Funcionalidad incluida 2]',
      '[Funcionalidad incluida 3]',
      '[Funcionalidad incluida 4]',
      '[Funcionalidad incluida 5]',
    ],
    cta: { label: 'Solicitar información', href: '#contacto' },
  },
];
