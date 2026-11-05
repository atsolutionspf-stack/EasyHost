/**
 * FUNCIONALIDADES
 * ---------------
 * Añade, quita o reordena elementos de este array y la sección se adapta sola.
 * Los iconos vienen de https://lucide.dev (importa el que necesites).
 * Qué incluye cada plan se edita aparte, en plans.ts.
 */
import type { LucideIcon } from 'lucide-react';
import { UtensilsCrossed, CalendarCheck, ShoppingBag, Receipt, ChartColumn, Globe } from 'lucide-react';

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const features: Feature[] = [
  {
    id: 'sala-cocina',
    icon: UtensilsCrossed,
    title: 'TPV de sala y cocina',
    description: 'Toma comandas en sala y envíalas directamente a cocina.',
    items: [
      'TPV',
      'Plano de salas',
      'Comandero y comandero QR',
      'KDS: pantalla de cocina',
      'Modo offline',
    ],
  },
  {
    id: 'reservas',
    icon: CalendarCheck,
    title: 'Gestión de reservas',
    description: 'Todas las reservas del día, ordenadas y a la vista.',
    items: [
      'Visualización y organización de reservas',
      'Gestión de clientes y comensales',
      'Control de mesas y horarios',
      'Estados de cada reserva: pendiente, confirmada, sentada…',
    ],
  },
  {
    id: 'pedidos',
    icon: ShoppingBag,
    title: 'Pedidos online',
    description: 'Tu carta en internet y los pedidos llegando a un solo sitio.',
    items: [
      'Carta digital',
      'Recepción de pedidos desde tu web',
      'Gestión de pedidos desde el panel',
      'Organización de productos y categorías',
    ],
  },
  {
    id: 'caja',
    icon: Receipt,
    title: 'Caja y Verifactu',
    description: 'El cierre del día y Verifactu, en el mismo sistema.',
    items: ['Cierre diario de caja', 'Verifactu'],
  },
  {
    id: 'control',
    icon: ChartColumn,
    title: 'Control del negocio',
    description: 'Datos y herramientas para decidir mejor.',
    items: ['Analítica básica y completa', 'Control de stock', 'CRM de clientes', 'Multi-restaurante'],
  },
  {
    id: 'presencia',
    icon: Globe,
    title: 'Presencia online',
    description: 'Un canal propio para que tus clientes te encuentren.',
    items: [
      'Página web personalizada para tu restaurante',
      'Carta digital accesible desde cualquier dispositivo',
      'Canal propio para recibir reservas y pedidos',
    ],
  },
];
