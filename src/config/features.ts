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
import type { FeatureItem } from './plans';

/** Una funcionalidad { label, soon: true } se muestra con la etiqueta «Próximamente». */
type FeatureText = { title: string; description: string; items: FeatureItem[] };

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
      items: ['TPV y cobros', 'Caja y cierre diario', 'Modo offline', 'Usuarios y permisos', { label: 'Facturación VeriFactu', soon: true }],
    },
    en: {
      title: 'POS and cash-up',
      description: 'Take payments quickly at the counter and close the day without surprises.',
      items: ['POS and payments', 'Till and daily cash-up', 'Offline mode', 'Users and permissions', { label: 'VeriFactu invoicing (Spanish compliance)', soon: true }],
    },
  },
  {
    id: 'crm',
    icon: Users,
    visual: 'client',
    es: {
      title: 'CRM de clientes',
      description: 'La ficha de cada cliente, para cuidar a los que vuelven.',
      items: ['CRM', 'Analíticas de ventas y pedidos'],
    },
    en: {
      title: 'Customer CRM',
      description: 'A profile for every customer, so you can look after your regulars.',
      items: ['CRM', 'Sales and order analytics'],
    },
  },
  {
    id: 'reservas',
    icon: CalendarCheck,
    es: {
      title: 'Reservas',
      description: 'Todas las reservas del día, ordenadas y a la vista.',
      items: ['Reservas y asignación de mesas', 'Control de horarios', 'Reservas avanzadas en Professional'],
    },
    en: {
      title: 'Bookings',
      description: 'All of today’s bookings, organised and in plain sight.',
      items: ['Bookings and table allocation', 'Control time slots', 'Advanced bookings in Professional'],
    },
  },
  {
    id: 'pedidos',
    icon: ShoppingBag,
    es: {
      title: 'Pedidos online',
      description: 'Tu catálogo en internet y los pedidos llegando a un solo sitio.',
      items: ['Catálogo o carta digital', 'Pedidos desde tu web', { label: 'Integraciones de delivery', soon: true }],
    },
    en: {
      title: 'Online orders',
      description: 'Your catalogue online and every order arriving in one place.',
      items: ['Digital catalogue or menu', 'Orders from your website', { label: 'Delivery integrations', soon: true }],
    },
  },
  {
    id: 'stock',
    icon: Boxes,
    es: {
      title: 'Stock, equipo y locales',
      description: 'Controla tu inventario, organiza a tu equipo y gestiona hasta 3 locales.',
      items: ['Stock básico, o avanzado con escandallos', 'Turnos y personal', 'Hasta 3 establecimientos en Professional'],
    },
    en: {
      title: 'Stock, team and locations',
      description: 'Track inventory, organise your team and manage up to 3 locations.',
      items: ['Basic stock, or advanced with recipe costing', 'Shifts and staff', 'Up to 3 locations on Professional'],
    },
  },
  {
    id: 'hosteleria',
    icon: UtensilsCrossed,
    size: 'full',
    es: {
      title: 'Para hostelería',
      description: 'Si tienes bar, restaurante o cafetería, la sala y la cocina también van conectadas.',
      items: ['Plano interactivo de mesas', 'Pedidos y comandas por mesa', 'Comandero digital y carta QR', 'KDS: pantalla de cocina'],
    },
    en: {
      title: 'For hospitality',
      description: 'If you run a bar, restaurant or café, the floor and the kitchen are connected too.',
      items: ['Interactive floor plan', 'Orders and tickets by table', 'Staff order taking and QR menu', 'KDS: kitchen display'],
    },
  },
];

export const features: Feature[] = featureList.map(({ es, en, ...rest }) => ({ ...rest, ...(lang === 'en' ? en : es) }));
