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
    title: 'TPV, reservas y pedidos online en una sola cuota.',
    lead: 'Todo tu negocio conectado, desde {precio}/mes.',
    subtitle:
      'Clientia reúne el cobro, la caja, las reservas, los pedidos online y la ficha de cada cliente en una única plataforma. Sin pagar aparte por las reservas ni por los pedidos online.',
    priceNote: 'Precios sin IVA.',
    secondaryCta: { label: 'Ver planes y precios', href: '#precios' },
    /** Señales de confianza junto a los botones: solo hechos confirmados. */
    trust: ['Te lo dejamos configurado', 'Modo offline incluido', 'Reservas y pedidos online incluidos en Essential'],
    mockupCaption: 'Vista ilustrativa de Clientia con datos de ejemplo',
  },
  en: {
    audience: 'POS and CRM for shops, hospitality and services',
    title: 'POS, bookings and online orders in one subscription.',
    lead: 'Your whole business connected, from {precio}/month.',
    subtitle:
      'Clientia brings payments, the till, bookings, online orders and every customer’s profile together on one platform. No extra fees for bookings or online orders.',
    priceNote: 'Prices exclude VAT.',
    secondaryCta: { label: 'See plans and pricing', href: '#precios' },
    trust: ['We set it up for you', 'Offline mode included', 'Bookings and online orders included in Essential'],
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

export const featuresContent = pick({
  es: {
    title: 'Menos tareas, más ventas.',
    intro: 'Lo que cambia en tu día a día cuando el cobro, las reservas, los pedidos y los clientes trabajan juntos.',
  },
  en: {
    title: 'Less admin, more sales.',
    intro: 'What changes day to day when payments, bookings, orders and customers work together.',
  },
});

export const stepsContent = pick({
  es: {
    title: 'Empezar es sencillo.',
    intro: 'Tú nos cuentas cómo trabajas; nosotros dejamos Clientia listo para tu negocio.',
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
    intro: 'You tell us how you work; we get Clientia ready for your business.',
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

/** Sección «una sola cuota en lugar de varias suscripciones». */
export const replaceContent = pick({
  es: {
    title: 'Deja de pagar por separado cada herramienta.',
    text: 'Es habitual pagar un TPV, un sistema de reservas aparte, una herramienta de pedidos online y un programa de informes, y que ninguno hable con los demás. Con Clientia Essential lo tienes todo conectado, en una sola cuota.',
    tools: ['TPV', 'Reservas', 'Pedidos online', 'Informes y analíticas'],
    result: 'Clientia Essential',
    priceLabel: '{precio}/mes',
    note: 'Te ayudamos a comprobar que cubre lo que necesita tu negocio antes de cambiar.',
    cta: { label: 'Ver planes', href: '#precios' },
  },
  en: {
    title: 'Stop paying for every tool separately.',
    text: 'It’s common to pay for a POS, a separate booking system, an online ordering tool and a reporting app, none of which talk to each other. With Clientia Essential, it’s all connected in one subscription.',
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

/**
 * TESTIMONIOS
 * La sección solo aparece si hay al menos uno. Usa únicamente opiniones reales
 * y con permiso del cliente (nombre, negocio y, si quieres, ciudad).
 * Ejemplo: { quote: '…', name: 'Nombre Apellido', role: 'Propietario', business: 'Nombre del negocio' }
 */
export type Testimonial = { quote: string; name: string; role: string; business: string };

export const testimonialsContent = pick({
  es: { title: 'Lo que dicen quienes ya lo usan', items: [] as Testimonial[] },
  en: { title: 'What customers say', items: [] as Testimonial[] },
});
