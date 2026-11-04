/**
 * TEXTOS DE LA PÁGINA
 * -------------------
 * Todos los textos comerciales de cada sección están aquí.
 * Las funcionalidades están en features.ts y los planes en plans.ts.
 */
import type { LucideIcon } from 'lucide-react';
import {
  PhoneCall,
  MessagesSquare,
  Hourglass,
  Store,
  Shuffle,
  Clock,
  Smile,
  Inbox,
  LayoutGrid,
  Globe,
} from 'lucide-react';

export const heroContent = {
  title: 'Gestiona tu restaurante de forma más sencilla.',
  lead: 'Más reservas, más pedidos y menos complicaciones.',
  subtitle:
    'Centraliza las reservas y los pedidos online de tu restaurante en una única plataforma. Automatiza procesos, ahorra tiempo y ofrece una mejor experiencia a tus clientes.',
  secondaryCta: { label: 'Descubrir funcionalidades', href: '#funcionalidades' },
  audience: 'Para restaurantes, bares, cafeterías y negocios de hostelería.',
  mockupCaption: 'Vista ilustrativa del panel de EasyHost',
};

export type IconText = { icon: LucideIcon; title: string; text: string };

export const problemContent = {
  title: 'El servicio ya es bastante intenso. La gestión no debería serlo.',
  intro: 'Así se organizan todavía muchos restaurantes:',
  problems: [
    {
      icon: PhoneCall,
      title: 'Reservas por teléfono o en libreta',
      text: 'Llamadas en plena hora punta y apuntes que se pierden o se duplican.',
    },
    {
      icon: MessagesSquare,
      title: 'Pedidos por muchos canales',
      text: 'Teléfono, mensajes, redes sociales… cada pedido llega por un sitio distinto.',
    },
    {
      icon: Hourglass,
      title: 'Horas en tareas administrativas',
      text: 'Tiempo que se va en apuntar, confirmar y revisar en lugar de atender.',
    },
    {
      icon: Store,
      title: 'Dependencia de plataformas externas',
      text: 'Tus clientes y tus ventas pasan por canales que no controlas.',
    },
    {
      icon: Shuffle,
      title: 'Un negocio difícil de organizar',
      text: 'Sin una visión clara de lo que tienes hoy, mañana y esta semana.',
    },
  ] satisfies IconText[],
  solution: {
    title: 'EasyHost lo reúne todo en un único panel.',
    text: 'Reservas, pedidos online y la carta de tu restaurante en una misma plataforma, pensada para usarla sin conocimientos técnicos.',
    points: [
      'Las reservas y los pedidos llegan a un solo lugar.',
      'Tus clientes reservan y piden desde tu propia web.',
      'Tú lo organizas todo desde el móvil, la tablet o el ordenador.',
    ],
  },
};

export const featuresContent = {
  title: 'Todo lo que necesitas para gestionar reservas y pedidos.',
  intro: 'Herramientas sencillas para el día a día de tu restaurante, reunidas en una sola plataforma.',
};

export const stepsContent = {
  title: 'Empezar es sencillo.',
  intro: 'Nos encargamos de la puesta en marcha para que tú sigas centrado en tu restaurante.',
  steps: [
    {
      title: 'Configuramos tu restaurante',
      text: 'Adaptamos la plataforma a tu negocio: tu carta, tus mesas y tus horarios.',
    },
    {
      title: 'Tus clientes reservan y piden online',
      text: 'Acceden a tu página y realizan sus reservas y pedidos fácilmente.',
    },
    {
      title: 'Gestionas todo desde un único panel',
      text: 'Recibes y organizas las reservas y los pedidos de manera centralizada.',
    },
  ],
};

export const pricingContent = {
  title: 'Planes para cada tipo de negocio.',
  intro: 'Elige el plan que mejor se adapta a tu restaurante. Si tienes dudas, te ayudamos a decidir.',
};

export const benefitsContent = {
  title: 'Menos tiempo gestionando. Más tiempo para tu restaurante.',
  intro: 'Lo que cambia en tu día a día cuando todo está en un mismo lugar.',
  benefits: [
    {
      icon: Clock,
      title: 'Ahorra tiempo en la gestión diaria',
      text: 'Menos llamadas, menos apuntes a mano y menos tareas repetitivas.',
    },
    {
      icon: Smile,
      title: 'Mejora la experiencia de tus clientes',
      text: 'Reservan y piden cuando quieren, sin esperas al teléfono.',
    },
    {
      icon: Inbox,
      title: 'Recibe reservas y pedidos directamente',
      text: 'Llegan a tu panel desde tu propia web, sin intermediarios.',
    },
    {
      icon: LayoutGrid,
      title: 'Centraliza la gestión de tu restaurante',
      text: 'Toda la información del negocio, ordenada y en un mismo sitio.',
    },
    {
      icon: Globe,
      title: 'Ten tu propio canal de venta online',
      text: 'Una web y una carta digital con la imagen de tu restaurante.',
    },
  ] satisfies IconText[],
};

export const finalCtaContent = {
  title: 'Tu restaurante merece una gestión más sencilla.',
  text: 'Empieza a digitalizar tu negocio y descubre todo lo que puedes gestionar desde una única plataforma.',
  formTitle: 'Solicita tu demo',
  formIntro: 'Déjanos tus datos y te contactamos para enseñarte EasyHost con tu propio restaurante en mente.',
};
