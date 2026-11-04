/**
 * FUNCIONALIDADES
 * ---------------
 * Añade, quita o reordena elementos de este array y la sección se adapta sola.
 * Los iconos vienen de https://lucide.dev (importa el que necesites).
 */
import type { LucideIcon } from 'lucide-react';
import { CalendarCheck, ShoppingBag, LayoutDashboard, Globe } from 'lucide-react';

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const features: Feature[] = [
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
    id: 'panel',
    icon: LayoutDashboard,
    title: 'Panel de administración',
    description: 'El día a día de tu restaurante, desde una sola pantalla.',
    items: [
      'Toda la información centralizada',
      'Gestión sencilla del restaurante',
      'Control de las operaciones desde un único lugar',
    ],
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
