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
    title: 'Todo tu negocio, conectado en un solo lugar.',
    lead: 'Vende, cobra, reserva y conoce a tus clientes desde una sola plataforma.',
    subtitle:
      'Clientia reúne el TPV, la caja, las reservas, los pedidos online, el stock y la ficha de cada cliente. Sin herramientas desconectadas ni varias suscripciones.',
    priceNote: 'Desde {precio}/mes, sin IVA.',
    secondaryCta: { label: 'Ver funcionalidades', href: '#funcionalidades' },
    mockupCaption: 'Vista ilustrativa de Clientia con datos de ejemplo',
  },
  en: {
    audience: 'POS and CRM for shops, hospitality and services',
    title: 'Your whole business, connected in one place.',
    lead: 'Sell, take payments, manage bookings and know your customers from a single platform.',
    subtitle:
      'Clientia brings together your POS, till, bookings, online orders, stock and every customer’s profile. No disconnected tools, no stack of subscriptions.',
    priceNote: 'From {precio}/month, excluding VAT.',
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
    intro: 'Essential ya incluye lo necesario para dejar tus otras suscripciones. Professional añade control y automatización, y Custom se adapta a cadenas y grupos.',
  },
  en: {
    title: 'Clear pricing, no surprises.',
    intro: 'Essential already covers what you need to drop your other subscriptions. Professional adds control and automation, and Custom adapts to chains and groups.',
  },
});

export const benefitsContent = pick({
  es: {
    title: 'Sencillo, completo y asequible.',
    intro: 'Las tres promesas que guían Clientia, en el producto y en el trato.',
    benefits: [
      {
        title: 'Sencillo',
        text: 'Fácil de aprender y de usar en plena jornada, sin conocimientos técnicos.',
      },
      {
        title: 'Completo',
        text: 'Ventas, caja, reservas, pedidos, stock y clientes en una única plataforma conectada.',
      },
      {
        title: 'Asequible',
        text: 'Costes claros desde el primer día, y add-ons solo si los necesitas.',
      },
    ] satisfies TitleText[],
  },
  en: {
    title: 'Simple, complete and affordable.',
    intro: 'The three promises behind Clientia, in the product and in how we work with you.',
    benefits: [
      {
        title: 'Simple',
        text: 'Easy to learn and to use in the middle of a busy day, no technical knowledge needed.',
      },
      {
        title: 'Complete',
        text: 'Sales, till, bookings, orders, stock and customers on one connected platform.',
      },
      {
        title: 'Affordable',
        text: 'Clear costs from day one, and add-ons only if you need them.',
      },
    ] satisfies TitleText[],
  },
});

/** Sección «una sola cuota en lugar de varias suscripciones». */
export const replaceContent = pick({
  es: {
    title: 'Una sola cuota en lugar de varias suscripciones.',
    text: 'Muchos negocios pagan por separado un TPV, un sistema de reservas, una herramienta de pedidos online y un programa de informes. Con Clientia Essential lo tienes todo conectado en una sola plataforma.',
    tools: ['TPV', 'Reservas', 'Pedidos online', 'Informes y analíticas'],
    result: 'Clientia Essential',
    priceLabel: '{precio}/mes',
    note: 'Te ayudamos a comprobar que cubre lo que necesita tu negocio antes de cambiar.',
    cta: { label: 'Ver planes', href: '#precios' },
  },
  en: {
    title: 'One subscription instead of several.',
    text: 'Many businesses pay separately for a POS, a booking system, an online ordering tool and a reporting app. With Clientia Essential, it’s all connected on a single platform.',
    tools: ['POS', 'Bookings', 'Online orders', 'Reports and analytics'],
    result: 'Clientia Essential',
    priceLabel: '{precio}/month',
    note: 'We’ll help you check it covers what your business needs before you switch.',
    cta: { label: 'See plans', href: '#precios' },
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

/**
 * PREGUNTAS FRECUENTES
 * Solo respuestas confirmadas. Si cambian precios o funciones, revisa también
 * el bloque FAQPage de index.html y en/index.html (datos para Google).
 */
export const faqContent = pick({
  es: {
    title: 'Preguntas frecuentes',
    intro: 'Lo que suelen preguntarnos antes de solicitar una demo.',
    items: [
      {
        q: '¿Clientia sirve para mi tipo de negocio?',
        a: 'Está pensado para comercios, hostelería y servicios que atienden a sus clientes cada día. Las funciones de sala y cocina, como el plano de mesas, las comandas o el KDS, son específicas de hostelería.',
      },
      {
        q: '¿Los precios incluyen IVA?',
        a: 'No. Essential cuesta 19 €/mes y Professional 39 €/mes, sin IVA. El plan Custom se presupuesta según tus locales y necesidades.',
      },
      {
        q: '¿Cuántos locales puedo gestionar?',
        a: 'Essential incluye 1 establecimiento y Professional, hasta 3. Si tienes más de 3, el plan Custom se adapta a tu grupo o cadena.',
      },
      {
        q: '¿Qué pasa si se cae internet?',
        a: 'El TPV incluye modo offline para que puedas seguir trabajando aunque pierdas la conexión.',
      },
      {
        q: '¿Qué significa «Próximamente»?',
        a: 'Son funciones en desarrollo, como la facturación VeriFactu o las integraciones de delivery. Se activarán cuando estén listas y validadas.',
      },
      {
        q: '¿Tengo que configurarlo yo?',
        a: 'No. Adaptamos la plataforma a tu negocio, con tus productos, tus precios y tus horarios, para que empieces a usarla sin conocimientos técnicos.',
      },
      {
        q: '¿Puedo tener mi propia web conectada?',
        a: 'Sí, con el add-on «Página web propia conectada» (+29 €/mes). La diseñamos con Lintel, con reservas y pedidos conectados a Clientia.',
      },
    ],
  },
  en: {
    title: 'Frequently asked questions',
    intro: 'What people usually ask us before booking a demo.',
    items: [
      {
        q: 'Is Clientia right for my type of business?',
        a: 'It’s built for shops, hospitality and service businesses that serve customers every day. Floor and kitchen features, such as the floor plan, table tickets or the KDS, are specific to hospitality.',
      },
      {
        q: 'Do prices include VAT?',
        a: 'No. Essential costs €19/month and Professional €39/month, excluding VAT. The Custom plan is quoted based on your locations and needs.',
      },
      {
        q: 'How many locations can I manage?',
        a: 'Essential includes 1 location and Professional up to 3. If you have more than 3, the Custom plan adapts to your group or chain.',
      },
      {
        q: 'What happens if the internet goes down?',
        a: 'The POS includes an offline mode so you can keep working even if you lose your connection.',
      },
      {
        q: 'What does “Coming soon” mean?',
        a: 'These are features in development, such as VeriFactu invoicing or delivery integrations. They will be enabled once they are ready and validated.',
      },
      {
        q: 'Do I have to set it up myself?',
        a: 'No. We adapt the platform to your business, with your products, prices and opening hours, so you can start using it without technical knowledge.',
      },
      {
        q: 'Can I have my own connected website?',
        a: 'Yes, with the “Your own connected website” add-on (+€29/month). We design it with Lintel, with bookings and orders connected to Clientia.',
      },
    ],
  },
});
