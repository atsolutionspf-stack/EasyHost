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
    audience: 'TPV y CRM para comercios, hostelería y servicios',
    title: 'Vende, cobra y conoce a tus clientes desde un solo sitio.',
    lead: 'El TPV y el CRM de tu negocio, conectados.',
    subtitle:
      'Clientia reúne las ventas, la caja, el stock, las reservas, los pedidos online y la ficha de cada cliente en una única plataforma. Menos herramientas sueltas, más tiempo para atender.',
    secondaryCta: { label: 'Ver funcionalidades', href: '#funcionalidades' },
    mockupCaption: 'Vista ilustrativa de Clientia con datos de ejemplo',
  },
  en: {
    audience: 'POS and CRM for shops, hospitality and services',
    title: 'Sell, take payments and know your customers from one place.',
    lead: 'Your business’s POS and CRM, connected.',
    subtitle:
      'Clientia brings sales, cash-up, stock, bookings, online orders and every customer’s profile together on one platform. Fewer scattered tools, more time to serve.',
    secondaryCta: { label: 'See the features', href: '#funcionalidades' },
    mockupCaption: 'Illustrative view of Clientia with sample data',
  },
});

export const sectorsContent = pick({
  es: {
    title: 'Pensado para negocios que atienden a sus clientes cada día',
    sectors: [
      { id: 'comercio', title: 'Comercio', text: 'Tiendas, boutiques y comercios de barrio' },
      { id: 'hosteleria', title: 'Hostelería', text: 'Bares, restaurantes y cafeterías' },
      { id: 'servicios', title: 'Servicios', text: 'Estudios, talleres y negocios con cita' },
    ],
  },
  en: {
    title: 'Built for businesses that serve customers every day',
    sectors: [
      { id: 'comercio', title: 'Retail', text: 'Shops, boutiques and local stores' },
      { id: 'hosteleria', title: 'Hospitality', text: 'Bars, restaurants and cafés' },
      { id: 'servicios', title: 'Services', text: 'Studios, workshops and appointment-based businesses' },
    ],
  },
});

export const problemContent = pick({
  es: {
    title: 'Atender ya es bastante trabajo. La gestión no debería serlo.',
    intro: 'Así trabajan todavía muchos negocios',
    solutionLabel: 'Con Clientia',
    problems: [
      {
        title: 'La caja en un sitio y los clientes en otro',
        text: 'Ventas, cobros y datos de clientes repartidos entre programas, libretas y hojas de cálculo.',
      },
      {
        title: 'Pedidos y reservas por muchos canales',
        text: 'Teléfono, mensajes, redes sociales… cada uno llega por un sitio distinto.',
      },
      {
        title: 'Horas en tareas administrativas',
        text: 'Tiempo que se va en apuntar, cuadrar y revisar en lugar de atender.',
      },
      {
        title: 'Sin saber quién vuelve',
        text: 'Sin una ficha de cada cliente es difícil cuidar a los habituales.',
      },
      {
        title: 'Dependencia de plataformas externas',
        text: 'Tus clientes y tus ventas pasan por canales que no controlas.',
      },
    ] satisfies TitleText[],
    solution: {
      title: 'Clientia lo reúne todo en un único sistema.',
      text: 'El TPV, la caja, el stock y la ficha de cada cliente en una misma plataforma, pensada para usarla sin conocimientos técnicos.',
      points: [
        'Ventas, caja y clientes trabajan conectados.',
        'Tus clientes reservan y piden desde tu propia web.',
        'Lo consultas todo desde el móvil, la tablet o el ordenador.',
      ],
    },
  },
  en: {
    title: 'Serving customers is work enough. Running the business shouldn’t be.',
    intro: 'How many businesses still work',
    solutionLabel: 'With Clientia',
    problems: [
      {
        title: 'The till in one place, customers in another',
        text: 'Sales, payments and customer data spread across apps, notebooks and spreadsheets.',
      },
      {
        title: 'Orders and bookings from everywhere',
        text: 'Phone, messages, social media… each one arrives through a different channel.',
      },
      {
        title: 'Hours lost on admin',
        text: 'Time spent writing down, balancing and checking instead of serving.',
      },
      {
        title: 'No idea who comes back',
        text: 'Without a profile for each customer, it’s hard to look after your regulars.',
      },
      {
        title: 'Relying on third-party platforms',
        text: 'Your customers and your sales go through channels you don’t control.',
      },
    ] satisfies TitleText[],
    solution: {
      title: 'Clientia brings it all into one system.',
      text: 'POS, cash-up, stock and every customer’s profile on one platform, designed to be used without any technical knowledge.',
      points: [
        'Sales, cash-up and customers work together.',
        'Your customers book and order from your own website.',
        'You check everything from your phone, tablet or computer.',
      ],
    },
  },
});

export const featuresContent = pick({
  es: {
    title: 'Todo lo que necesitas para llevar tu negocio.',
    intro: 'Del cobro en el mostrador al cierre de caja, con tus clientes siempre a mano.',
  },
  en: {
    title: 'Everything you need to run your business.',
    intro: 'From the counter to the end-of-day cash-up, with your customers always at hand.',
  },
});

export const stepsContent = pick({
  es: {
    title: 'Empezar es sencillo.',
    intro: 'Nos encargamos de la puesta en marcha para que tú sigas centrado en tu negocio.',
    steps: [
      {
        title: 'Configuramos tu negocio',
        text: 'Adaptamos la plataforma a tu negocio: tus productos, tus precios y tus horarios.',
      },
      {
        title: 'Vendes, cobras y atiendes',
        text: 'Cobras en el mostrador y tus clientes reservan y piden online desde tu web.',
      },
      {
        title: 'Lo gestionas todo desde un único panel',
        text: 'Ventas, caja, pedidos y clientes, organizados en un mismo sitio.',
      },
    ],
  },
  en: {
    title: 'Getting started is easy.',
    intro: 'We handle the set-up so you can stay focused on your business.',
    steps: [
      {
        title: 'We set up your business',
        text: 'We adapt the platform to your business: your products, your prices and your opening hours.',
      },
      {
        title: 'You sell, take payments and serve',
        text: 'You take payments at the counter while customers book and order online from your website.',
      },
      {
        title: 'You manage everything from one dashboard',
        text: 'Sales, cash-up, orders and customers, organised in one place.',
      },
    ],
  },
});

export const pricingContent = pick({
  es: {
    title: 'Precios claros, sin sorpresas.',
    intro: 'Elige el plan que mejor encaja con tu negocio. Si tienes dudas, te ayudamos a decidir.',
  },
  en: {
    title: 'Clear pricing, no surprises.',
    intro: 'Choose the plan that suits your business best. Not sure? We’ll help you choose.',
  },
});

export const benefitsContent = pick({
  es: {
    title: 'Menos tiempo gestionando. Más tiempo para tus clientes.',
    intro: 'Lo que cambia en tu día a día cuando todo está en un mismo lugar.',
    benefits: [
      {
        title: 'Ahorra tiempo en la gestión diaria',
        text: 'Menos apuntes a mano, menos programas sueltos y menos tareas repetitivas.',
      },
      {
        title: 'Conoce mejor a tus clientes',
        text: 'Cada cliente con su ficha, para cuidar a los que vuelven.',
      },
      {
        title: 'Cierra la caja sin sustos',
        text: 'Las ventas del día, ordenadas y listas para cuadrar.',
      },
      {
        title: 'Recibe reservas y pedidos directamente',
        text: 'Llegan a tu panel desde tu propia web, sin intermediarios.',
      },
      {
        title: 'Todo tu negocio en un mismo sitio',
        text: 'Ventas, stock, pedidos y clientes, desde cualquier dispositivo.',
      },
    ] satisfies TitleText[],
  },
  en: {
    title: 'Less time on admin. More time for your customers.',
    intro: 'What changes day to day when everything is in one place.',
    benefits: [
      {
        title: 'Save time on daily management',
        text: 'Fewer handwritten notes, fewer separate apps and fewer repetitive tasks.',
      },
      {
        title: 'Get to know your customers',
        text: 'Every customer has a profile, so you can look after the ones who come back.',
      },
      {
        title: 'Cash up without surprises',
        text: 'The day’s sales, organised and ready to balance.',
      },
      {
        title: 'Receive bookings and orders directly',
        text: 'They reach your dashboard from your own website, with no middlemen.',
      },
      {
        title: 'Your whole business in one place',
        text: 'Sales, stock, orders and customers, from any device.',
      },
    ] satisfies TitleText[],
  },
});

export const finalCtaContent = pick({
  es: {
    title: 'Tu negocio merece una gestión más sencilla.',
    text: 'Descubre todo lo que puedes vender, cobrar y gestionar desde una única plataforma.',
    formTitle: 'Solicita tu demo',
    formIntro: 'Déjanos tus datos y te contactamos para enseñarte Clientia con tu negocio en mente.',
  },
  en: {
    title: 'Your business deserves simpler management.',
    text: 'Discover everything you can sell, take payments for and manage from a single platform.',
    formTitle: 'Book your demo',
    formIntro: 'Leave us your details and we’ll get in touch to show you Clientia with your business in mind.',
  },
});
