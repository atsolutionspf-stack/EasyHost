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
      title: 'Cobra rápido y cierra la caja sin sustos',
      description: 'Ventas, cobros y cierre del día en el mismo sitio, y sigues trabajando aunque se vaya internet.',
      items: ['TPV y cobros', 'Caja y cierre diario', 'Modo offline', 'Usuarios y permisos', { label: 'Facturación VeriFactu', soon: true }],
    },
    en: {
      title: 'Take payments fast, cash up without surprises',
      description: 'Sales, payments and end-of-day cash-up in one place, and you keep working even if the internet drops.',
      items: ['POS and payments', 'Till and daily cash-up', 'Offline mode', 'Users and permissions', { label: 'VeriFactu invoicing (Spanish compliance)', soon: true }],
    },
  },
  {
    id: 'crm',
    icon: Users,
    visual: 'client',
    es: {
      title: 'Haz que tus clientes vuelvan',
      description: 'Cada cliente con su ficha, para reconocer y cuidar a los habituales.',
      items: ['CRM', 'Analíticas de ventas y pedidos'],
    },
    en: {
      title: 'Bring your customers back',
      description: 'Every customer has a profile, so you can recognise and look after your regulars.',
      items: ['CRM', 'Sales and order analytics'],
    },
  },
  {
    id: 'reservas',
    icon: CalendarCheck,
    es: {
      title: 'Reservas sin estar pegado al teléfono',
      description: 'Tus clientes reservan online y tú ves el día organizado, con sus mesas y horarios.',
      items: ['Reservas y asignación de mesas', 'Control de horarios', 'Reservas avanzadas en Professional'],
    },
    en: {
      title: 'Bookings without being glued to the phone',
      description: 'Customers book online and you see the day organised, with tables and time slots.',
      items: ['Bookings and table allocation', 'Control time slots', 'Advanced bookings in Professional'],
    },
  },
  {
    id: 'pedidos',
    icon: ShoppingBag,
    es: {
      title: 'Vende también online, desde tu propio canal',
      description: 'Tu catálogo o tu carta en internet, y cada pedido llega al mismo panel.',
      items: ['Catálogo o carta digital', 'Pedidos desde tu web', { label: 'Integraciones de delivery', soon: true }],
    },
    en: {
      title: 'Sell online too, through your own channel',
      description: 'Your catalogue or menu online, with every order arriving in the same dashboard.',
      items: ['Digital catalogue or menu', 'Orders from your website', { label: 'Delivery integrations', soon: true }],
    },
  },
  {
    id: 'stock',
    icon: Boxes,
    es: {
      title: 'Controla el stock y crece a más locales',
      description: 'Controla tu inventario, organiza a tu equipo y gestiona hasta 3 locales.',
      items: ['Stock básico, o avanzado con escandallos', 'Turnos y personal', 'Hasta 3 establecimientos en Professional'],
    },
    en: {
      title: 'Control stock and grow to more locations',
      description: 'Track inventory, organise your team and manage up to 3 locations.',
      items: ['Basic stock, or advanced with recipe costing', 'Shifts and staff', 'Up to 3 locations on Professional'],
    },
  },
  {
    id: 'hosteleria',
    icon: UtensilsCrossed,
    size: 'full',
    es: {
      title: 'Sala y cocina, coordinadas',
      description: 'Para bares, restaurantes y cafeterías: las comandas van de la mesa a la cocina sin papeles ni carreras.',
      items: ['Plano interactivo de mesas', 'Pedidos y comandas por mesa', 'Comandero digital y carta QR', 'KDS: pantalla de cocina'],
    },
    en: {
      title: 'Floor and kitchen, in sync',
      description: 'For bars, restaurants and cafés: orders go from the table to the kitchen without paper or running back and forth.',
      items: ['Interactive floor plan', 'Orders and tickets by table', 'Staff order taking and QR menu', 'KDS: kitchen display'],
    },
  },
];

export const features: Feature[] = featureList.map(({ es, en, ...rest }) => ({ ...rest, ...(lang === 'en' ? en : es) }));
