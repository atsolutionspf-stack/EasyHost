/**
 * FUNCIONALIDADES
 * ---------------
 * Añade, quita o reordena elementos y la sección se adapta sola.
 * Cada funcionalidad tiene su texto en español (`es`) y en inglés (`en`).
 * Los iconos vienen de https://lucide.dev (importa el que necesites).
 */
import type { LucideIcon } from 'lucide-react';
import { UtensilsCrossed, CalendarCheck, ShoppingBag, Receipt, ChartColumn, Globe } from 'lucide-react';
import { lang, type Lang } from '../i18n';

type FeatureText = { title: string; description: string; items: string[] };

export type Feature = { id: string; icon: LucideIcon } & FeatureText;

const featureList: ({ id: string; icon: LucideIcon } & Record<Lang, FeatureText>)[] = [
  {
    id: 'sala-cocina',
    icon: UtensilsCrossed,
    es: {
      title: 'TPV de sala y cocina',
      description: 'Toma comandas en sala y envíalas directamente a cocina.',
      items: ['TPV', 'Plano de salas', 'Comandero y comandero QR', 'KDS: pantalla de cocina', 'Modo offline'],
    },
    en: {
      title: 'Front-of-house and kitchen POS',
      description: 'Take orders at the table and send them straight to the kitchen.',
      items: ['POS', 'Floor plan', 'Order taking, including QR ordering', 'KDS: kitchen display', 'Offline mode'],
    },
  },
  {
    id: 'reservas',
    icon: CalendarCheck,
    es: {
      title: 'Gestión de reservas',
      description: 'Todas las reservas del día, ordenadas y a la vista.',
      items: [
        'Visualización y organización de reservas',
        'Gestión de clientes y comensales',
        'Control de mesas y horarios',
        'Estados de cada reserva: pendiente, confirmada, sentada…',
      ],
    },
    en: {
      title: 'Booking management',
      description: 'All of today’s bookings, organised and in plain sight.',
      items: [
        'View and organise bookings',
        'Manage customers and covers',
        'Control tables and time slots',
        'Booking status: pending, confirmed, seated…',
      ],
    },
  },
  {
    id: 'pedidos',
    icon: ShoppingBag,
    es: {
      title: 'Pedidos online',
      description: 'Tu carta en internet y los pedidos llegando a un solo sitio.',
      items: [
        'Carta digital',
        'Recepción de pedidos desde tu web',
        'Gestión de pedidos desde el panel',
        'Organización de productos y categorías',
      ],
    },
    en: {
      title: 'Online orders',
      description: 'Your menu online and every order arriving in one place.',
      items: [
        'Digital menu',
        'Orders straight from your website',
        'Manage orders from the dashboard',
        'Organise products and categories',
      ],
    },
  },
  {
    id: 'caja',
    icon: Receipt,
    es: {
      title: 'Caja y Verifactu',
      description: 'El cierre del día y Verifactu, en el mismo sistema.',
      items: ['Cierre diario de caja', 'Verifactu'],
    },
    en: {
      title: 'Cash-up and Verifactu',
      description: 'End-of-day cash-up and Verifactu, in the same system.',
      items: ['Daily cash-up', 'Verifactu (Spanish e-invoicing compliance)'],
    },
  },
  {
    id: 'control',
    icon: ChartColumn,
    es: {
      title: 'Control del negocio',
      description: 'Datos y herramientas para decidir mejor.',
      items: ['Analítica', 'Control de stock', 'CRM de clientes', 'Multi-restaurante'],
    },
    en: {
      title: 'Business control',
      description: 'Data and tools to make better decisions.',
      items: ['Analytics', 'Stock control', 'Customer CRM', 'Multi-restaurant'],
    },
  },
  {
    id: 'presencia',
    icon: Globe,
    es: {
      title: 'Presencia online',
      description: 'Un canal propio para que tus clientes te encuentren.',
      items: [
        'Página web personalizada para tu restaurante',
        'Carta digital accesible desde cualquier dispositivo',
        'Canal propio para recibir reservas y pedidos',
      ],
    },
    en: {
      title: 'Online presence',
      description: 'Your own channel for customers to find you.',
      items: [
        'A custom website for your restaurant',
        'Digital menu that works on any device',
        'Your own channel for bookings and orders',
      ],
    },
  },
];

export const features: Feature[] = featureList.map((f) => ({ id: f.id, icon: f.icon, ...f[lang] }));
