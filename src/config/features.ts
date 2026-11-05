/**
 * FUNCIONALIDADES
 * ---------------
 * Se muestran como bloques de distintos tamaños (bento).
 * - `size: 'wide'`  ocupa dos columnas y muestra una mini vista (`visual`).
 * - `size: 'full'`  ocupa todo el ancho (útil para el bloque de hostelería).
 * - sin `size`      bloque normal.
 * Cada funcionalidad tiene su texto en español (`es`) y en inglés (`en`).
 * Los iconos vienen de https://lucide.dev.
 */
import type { LucideIcon } from 'lucide-react';
import { ScanBarcode, Users, CalendarCheck, ShoppingBag, Boxes, UtensilsCrossed } from 'lucide-react';
import { lang, type Lang } from '../i18n';

type FeatureText = { title: string; description: string; items: string[] };

export type Feature = {
  id: string;
  icon: LucideIcon;
  size?: 'wide' | 'full';
  /** Mini vista ilustrativa del bloque (solo en bloques anchos). */
  visual?: 'ticket' | 'client';
} & FeatureText;

const featureList: (Omit<Feature, keyof FeatureText> & Record<Lang, FeatureText>)[] = [
  {
    id: 'tpv',
    icon: ScanBarcode,
    size: 'wide',
    visual: 'ticket',
    es: {
      title: 'TPV y caja',
      description: 'Cobra rápido en el mostrador y cierra la caja del día sin sustos.',
      items: ['TPV', 'Cierre diario de caja', 'Verifactu', 'Modo offline'],
    },
    en: {
      title: 'POS and cash-up',
      description: 'Take payments quickly at the counter and close the day without surprises.',
      items: ['POS', 'Daily cash-up', 'Verifactu (Spanish e-invoicing compliance)', 'Offline mode'],
    },
  },
  {
    id: 'crm',
    icon: Users,
    visual: 'client',
    es: {
      title: 'CRM de clientes',
      description: 'La ficha de cada cliente, para cuidar a los que vuelven.',
      items: ['CRM', 'Analítica de ventas'],
    },
    en: {
      title: 'Customer CRM',
      description: 'A profile for every customer, so you can look after your regulars.',
      items: ['CRM', 'Sales analytics'],
    },
  },
  {
    id: 'reservas',
    icon: CalendarCheck,
    es: {
      title: 'Reservas',
      description: 'Todas las reservas del día, ordenadas y a la vista.',
      items: ['Organización de reservas', 'Control de horarios', 'Estado de cada reserva'],
    },
    en: {
      title: 'Bookings',
      description: 'All of today’s bookings, organised and in plain sight.',
      items: ['Organise bookings', 'Control time slots', 'Status of every booking'],
    },
  },
  {
    id: 'pedidos',
    icon: ShoppingBag,
    es: {
      title: 'Pedidos online',
      description: 'Tu catálogo en internet y los pedidos llegando a un solo sitio.',
      items: ['Catálogo o carta digital', 'Pedidos desde tu web', 'Productos y categorías'],
    },
    en: {
      title: 'Online orders',
      description: 'Your catalogue online and every order arriving in one place.',
      items: ['Digital catalogue or menu', 'Orders from your website', 'Products and categories'],
    },
  },
  {
    id: 'stock',
    icon: Boxes,
    es: {
      title: 'Stock y varios locales',
      description: 'Controla tu inventario y gestiona más de un local.',
      items: ['Control de stock', 'Multi-local'],
    },
    en: {
      title: 'Stock and multiple locations',
      description: 'Keep track of inventory and manage more than one location.',
      items: ['Stock control', 'Multi-location'],
    },
  },
  {
    id: 'hosteleria',
    icon: UtensilsCrossed,
    size: 'full',
    es: {
      title: 'Para hostelería',
      description: 'Si tienes bar, restaurante o cafetería, la sala y la cocina también van conectadas.',
      items: ['Plano de salas', 'Comandero y comandero QR', 'KDS: pantalla de cocina'],
    },
    en: {
      title: 'For hospitality',
      description: 'If you run a bar, restaurant or café, the floor and the kitchen are connected too.',
      items: ['Floor plan', 'Order taking, including QR ordering', 'KDS: kitchen display'],
    },
  },
];

export const features: Feature[] = featureList.map(({ es, en, ...rest }) => ({ ...rest, ...(lang === 'en' ? en : es) }));
