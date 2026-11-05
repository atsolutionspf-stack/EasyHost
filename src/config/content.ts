/**
 * TEXTOS DE LA PÁGINA
 * -------------------
 * Todos los textos comerciales de cada sección, en español (`es`) y en inglés (`en`).
 * Si cambias un texto en un idioma, cámbialo también en el otro.
 * Las funcionalidades están en features.ts y los precios en plans.ts.
 */
import { pick } from '../i18n';

export type TitleText = { title: string; text: string };

export const heroContent = pick({
  es: {
    title: 'Gestiona tu restaurante de forma más sencilla.',
    lead: 'Más reservas, más pedidos y menos complicaciones.',
    subtitle:
      'EasyHost es el TPV que reúne la sala, la cocina, las reservas, los pedidos online y el cierre de caja en una única plataforma. Ahorra tiempo y ofrece una mejor experiencia a tus clientes.',
    secondaryCta: { label: 'Descubrir funcionalidades', href: '#funcionalidades' },
    audience: 'TPV para restaurantes, bares, cafeterías y negocios de hostelería.',
    mockupCaption: 'Vista ilustrativa del panel de EasyHost',
  },
  en: {
    title: 'Run your restaurant the simple way.',
    lead: 'More bookings, more orders, fewer headaches.',
    subtitle:
      'EasyHost is the POS system that brings front of house, kitchen, bookings, online orders and end-of-day cash-up together on one platform. Save time and give your customers a better experience.',
    secondaryCta: { label: 'See the features', href: '#funcionalidades' },
    audience: 'POS for restaurants, bars, cafés and hospitality businesses.',
    mockupCaption: 'Illustrative view of the EasyHost dashboard',
  },
});

export const problemContent = pick({
  es: {
    title: 'El servicio ya es bastante intenso. La gestión no debería serlo.',
    intro: 'Así se organizan todavía muchos restaurantes',
    solutionLabel: 'Con EasyHost',
    problems: [
      {
        title: 'Reservas por teléfono o en libreta',
        text: 'Llamadas en plena hora punta y apuntes que se pierden o se duplican.',
      },
      {
        title: 'Pedidos por muchos canales',
        text: 'Teléfono, mensajes, redes sociales… cada pedido llega por un sitio distinto.',
      },
      {
        title: 'Horas en tareas administrativas',
        text: 'Tiempo que se va en apuntar, confirmar y revisar en lugar de atender.',
      },
      {
        title: 'Dependencia de plataformas externas',
        text: 'Tus clientes y tus ventas pasan por canales que no controlas.',
      },
      {
        title: 'Un negocio difícil de organizar',
        text: 'Sin una visión clara de lo que tienes hoy, mañana y esta semana.',
      },
    ] satisfies TitleText[],
    solution: {
      title: 'EasyHost lo reúne todo en un único sistema.',
      text: 'El TPV, la cocina, las reservas y los pedidos online en una misma plataforma, pensada para usarla sin conocimientos técnicos.',
      points: [
        'La sala, la cocina, las reservas y los pedidos trabajan conectados.',
        'Tus clientes reservan y piden desde tu propia web.',
        'Tú lo organizas todo desde el móvil, la tablet o el ordenador.',
      ],
    },
  },
  en: {
    title: 'Service is intense enough. Running the place shouldn’t be.',
    intro: 'How many restaurants still get organised',
    solutionLabel: 'With EasyHost',
    problems: [
      {
        title: 'Bookings by phone or in a notebook',
        text: 'Calls in the middle of the rush and notes that get lost or double-booked.',
      },
      {
        title: 'Orders coming from everywhere',
        text: 'Phone, messages, social media… every order arrives through a different channel.',
      },
      {
        title: 'Hours lost on admin',
        text: 'Time spent writing down, confirming and checking instead of serving.',
      },
      {
        title: 'Relying on third-party platforms',
        text: 'Your customers and your sales go through channels you don’t control.',
      },
      {
        title: 'A business that’s hard to organise',
        text: 'No clear view of what’s coming today, tomorrow or this week.',
      },
    ] satisfies TitleText[],
    solution: {
      title: 'EasyHost brings it all into one system.',
      text: 'POS, kitchen, bookings and online orders on one platform, designed to be used without any technical knowledge.',
      points: [
        'Front of house, kitchen, bookings and orders all work together.',
        'Your customers book and order from your own website.',
        'You manage everything from your phone, tablet or computer.',
      ],
    },
  },
});

export const featuresContent = pick({
  es: {
    title: 'Todo lo que necesitas para llevar tu restaurante.',
    intro: 'Del TPV de sala al cierre de caja, en una sola plataforma.',
  },
  en: {
    title: 'Everything you need to run your restaurant.',
    intro: 'From the front-of-house POS to the end-of-day cash-up, on one platform.',
  },
});

export const stepsContent = pick({
  es: {
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
  },
  en: {
    title: 'Getting started is easy.',
    intro: 'We handle the set-up so you can stay focused on your restaurant.',
    steps: [
      {
        title: 'We set up your restaurant',
        text: 'We adapt the platform to your business: your menu, your tables and your opening hours.',
      },
      {
        title: 'Your customers book and order online',
        text: 'They visit your website and make bookings and orders with ease.',
      },
      {
        title: 'You manage everything from one dashboard',
        text: 'Bookings and orders arrive and are organised in one place.',
      },
    ],
  },
});

export const pricingContent = pick({
  es: {
    title: 'Precios claros, sin sorpresas.',
    intro: 'Elige el plan del TPV que mejor encaja con tu restaurante. Si tienes dudas, te ayudamos a decidir.',
  },
  en: {
    title: 'Clear pricing, no surprises.',
    intro: 'Choose the POS plan that suits your restaurant best. Not sure? We’ll help you choose.',
  },
});

export const benefitsContent = pick({
  es: {
    title: 'Menos tiempo gestionando. Más tiempo para tu restaurante.',
    intro: 'Lo que cambia en tu día a día cuando todo está en un mismo lugar.',
    benefits: [
      {
        title: 'Ahorra tiempo en la gestión diaria',
        text: 'Menos llamadas, menos apuntes a mano y menos tareas repetitivas.',
      },
      {
        title: 'Mejora la experiencia de tus clientes',
        text: 'Reservan y piden cuando quieren, sin esperas al teléfono.',
      },
      {
        title: 'Recibe reservas y pedidos directamente',
        text: 'Llegan a tu panel desde tu propia web, sin intermediarios.',
      },
      {
        title: 'Centraliza la gestión de tu restaurante',
        text: 'Toda la información del negocio, ordenada y en un mismo sitio.',
      },
      {
        title: 'Ten tu propio canal de venta online',
        text: 'Una web y una carta digital con la imagen de tu restaurante.',
      },
    ] satisfies TitleText[],
  },
  en: {
    title: 'Less time on admin. More time for your restaurant.',
    intro: 'What changes day to day when everything is in one place.',
    benefits: [
      {
        title: 'Save time on daily management',
        text: 'Fewer calls, fewer handwritten notes and fewer repetitive tasks.',
      },
      {
        title: 'Give your customers a better experience',
        text: 'They book and order whenever they like, without waiting on the phone.',
      },
      {
        title: 'Receive bookings and orders directly',
        text: 'They reach your dashboard from your own website, with no middlemen.',
      },
      {
        title: 'Run your restaurant from one place',
        text: 'All your business information, organised and in one spot.',
      },
      {
        title: 'Own your online sales channel',
        text: 'A website and digital menu that look like your restaurant.',
      },
    ] satisfies TitleText[],
  },
});

export const finalCtaContent = pick({
  es: {
    title: 'Tu restaurante merece una gestión más sencilla.',
    text: 'Empieza a digitalizar tu negocio y descubre todo lo que puedes gestionar desde una única plataforma.',
    formTitle: 'Solicita tu demo',
    formIntro: 'Déjanos tus datos y te contactamos para enseñarte EasyHost con tu propio restaurante en mente.',
  },
  en: {
    title: 'Your restaurant deserves simpler management.',
    text: 'Start bringing your business online and discover everything you can manage from a single platform.',
    formTitle: 'Book your demo',
    formIntro: 'Leave us your details and we’ll get in touch to show you EasyHost with your own restaurant in mind.',
  },
});
