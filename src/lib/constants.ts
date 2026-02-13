// ============================================================
// BUSINESS INFORMATION
// ============================================================

export const BUSINESS = {
  name: "WALWEBS | Emprendimientos Digitales",
  tagline: "Soluciones digitales estratégicas para emprendedores",
  description:
    "Convierte tu esfuerzo en ventas organizadas, constantes y profesionales. Soluciones digitales para emprendedores que venden en línea.",
  whatsapp: {
    number: "50254122572",
    defaultMessage: "¡Hola! Me interesa conocer más sobre sus servicios digitales.",
  },
  social: {
    facebook: "https://www.facebook.com/walwebede",
    instagram: "https://www.instagram.com/walwebestudio/",
    tiktok: "https://www.tiktok.com/@waltergarciaveliz",
  },
  email: "wgarcia.10@outlook.com",
} as const;

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Portafolio", href: "/perfil" },
  { label: "Contacto", href: "/contacto" },
] as const;

// ============================================================
// SERVICES DATA
// ============================================================

export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  idealFor: string;
  whatsappMessage: string;
  gradient: string;
  price?: string;
}

export const SERVICES: Service[] = [
  {
    id: "landing-inmobiliaria",
    slug: "landing-pages",
    icon: "🏗️",
    title: "Venta de Terrenos y Bienes Raíces",
    shortDescription:
      "Landing pages especializadas para desarrollos inmobiliarios, lotificaciones y terrenos.",
    fullDescription:
      "Presenta tus proyectos inmobiliarios con elegancia y claridad. Mapas interactivos, planos de lotificación digitales y botones directos de apartado. Ideal para captar leads calificados y agendar vistas al terreno.",
    features: [
      "Planos digitales interactivos",
      "Galería de fotos y videos de alta calidad",
      "Botón de apartado vía WhatsApp",
      "Formulario de clientes potenciales",
      "Mapa de ubicación integrado",
      "Optimizada para publicidad en Facebook/Google",
    ],
    idealFor: "Desarrolladores inmobiliarios, corredores y dueños de terrenos en venta.",
    whatsappMessage: "¡Hola! Me interesa una Landing Page para mi proyecto inmobiliario.",
    gradient: "from-amber-400 to-emerald-600",
  },
  {
    id: "catalogo-digital-autos",
    slug: "catalogo-digital-autos",
    icon: "🚗",
    title: "Vehículos de Agencia y Seminuevos",
    shortDescription:
      "Catálogos inteligentes para salas de ventas y agentes independientes de vehículos.",
    fullDescription:
      "Transformamos tu inventario en una vitrina digital premium. Fichas técnicas detalladas, comparativas y calculadoras de cuotas para que tus clientes tomen decisiones rápidas desde el celular.",
    features: [
      "Fichas técnicas dinámicas",
      "Galería de 360 grados opcional",
      "Calculadora de financiamiento sugerido",
      "Resaltado de extras y condiciones",
      "Botón directo de 'Prueba de Manejo'",
      "Fácil de compartir por redes sociales",
    ],
    idealFor: "Agencias de vehículos, ventas de seminuevos y vendedores particulares.",
    whatsappMessage: "¡Hola! Me interesa un catálogo digital para mi inventario de vehículos.",
    gradient: "from-blue-500 to-slate-700",
  },
  {
    id: "identidad-profesional",
    slug: "identidad-elite",
    icon: "👤",
    title: "Identidad Profesional Elite",
    price: "Desde Q350\n(aprox. $45 USD)",
    shortDescription:
      "Tú eres tu mejor marca. No envíes un archivo, envía una experiencia digital con tu CV Web interactivo.",
    fullDescription:
      "La solución definitiva para Consultores, Agentes Inmobiliarios, Profesionales de la Salud, Artistas y Creadores de Contenido (Influencers/TikTokers). No envíes un archivo, envía una experiencia digital que proyecte autoridad, cuente tu historia con animaciones y facilite que te contraten con un solo clic o un escaneo QR.",
    features: [
      "CV Web Interactivo (Animaciones)",
      "Portafolio Pro de Logros",
      "QR de Bolsillo para Networking",
      "Optimización para Móviles",
      "Botón Directo a WhatsApp",
      "Diseño de Autoridad Elite",
    ],
    idealFor: "Consultores, Inmobiliaria, Salud, Artistas y Creadores de Contenido (Influencers/TikTokers).",
    whatsappMessage: "¡Hola! Me interesa la Identidad Profesional Elite.",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    id: "servicios-empresariales",
    slug: "servicios-empresariales",
    icon: "💼",
    title: "Servicios y Consultoría Profesional",
    shortDescription:
      "Páginas de servicios que proyectan autoridad y facilitan la contratación.",
    fullDescription:
      "Si vendes servicios profesionales, asesorías o servicios técnicos, necesitas una página que explique claramente tus paquetes y experiencia. Diseñamos para que el cliente diga 'Sí' antes de contactarte.",
    features: [
      "Estructura orientada a contratar servicios",
      "Sección de paquetes y planes",
      "Resaltado de testimonio y experiencia",
      "Agenda de citas integrada",
      "Explicación clara de metodologías",
      "Diseño sobrio y profesional",
    ],
    idealFor: "Contadores, abogados, consultores, servicios técnicos y especialistas.",
    whatsappMessage: "¡Hola! Me interesa una página profesional para mis servicios.",
    gradient: "from-indigo-600 to-blue-400",
  },
  {
    id: "produccion-audiovisual",
    slug: "produccion-audiovisual",
    icon: "🎥",
    title: "Contenido para Lives y Redes",
    shortDescription:
      "Edición de clips estratégicos de tus mejores momentos en vivo para seguir vendiendo.",
    fullDescription:
      "No dejes que tu contenido se pierda. Extraemos los mejores momentos de tus presentaciones, ofertas relámpago o explicaciones de productos para crear Reels y TikToks que siguen captando clientes.",
    features: [
      "Extracción de clips ganadores de lives",
      "Edición dinámica con subtítulos",
      "Optimización para Facebook/TikTok/Instagram",
      "Musicalización y efectos profesionales",
      "Formato 9:16 (vertical para celular)",
      "Entrega rápida para mantener el hype",
    ],
    idealFor: "Emprendedores que quieren maximizar el alcance de sus transmisiones.",
    whatsappMessage: "¡Hola! Me interesa la edición de mis videos para redes sociales.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "combo-inicio",
    slug: "combo-inicio",
    icon: "🚀",
    title: "Impulso Digital Completo",
    shortDescription:
      "Todo lo necesario para pasar de 'vender por mensajes' a una 'marca digital'.",
    fullDescription:
      "El paquete definitivo para digitalizar tu negocio. Incluye diseño de logo, optimización de perfiles en redes y una landing page de venta inicial. Ideal para nuevos negocios de cualquier ramo.",
    features: [
      "Refuerzo de identidad visual",
      "Página de venta estratégica",
      "Configuración de WhatsApp Business",
      "Plantillas para publicaciones",
      "Asesoría en estrategia de pauta",
      "Todo bajo la calidad de Walweb",
    ],
    idealFor: "Cualquier negocio que quiera profesionalizar su presencia digital desde cero.",
    whatsappMessage: "¡Hola! Me interesa el Impulso Digital Completo para mi negocio.",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    id: "identidad-arranque",
    slug: "identidad-arranque",
    icon: "🎨",
    title: "Kit de Inicio Profesional",
    price: "Desde Q150\n(aprox. $20 USD)",
    shortDescription:
      "Iniciemos por profesionalizar tus redes: logo, portada, 3 anuncios y catálogo PDF para que atraigas clientes con pasión.",
    fullDescription:
      "¿Quieres vender en línea pero aún no estás listo para invertir mucho? Iniciemos por profesionalizar tus redes sociales. Un combito para que arranques de manera profesional: edición de logo, imagen de portada para FB, 3 anuncios en vertical y un catálogo PDF profesional para mostrar tus productos sin complicaciones. Personas como yo nos fijamos mucho en el profesionalismo y pasión con el que desarrollas tu labor.",
    features: [
      "Edición de Logotipo Pro",
      "Imagen de Portada para FB",
      "3 Anuncios en Vertical (Historias/Reels)",
      "Catálogo PDF Profesional",
      "Mini-Landing de Contacto",
      "Entrega Ultra-Rápida (48h)",
    ],
    idealFor: "Emprendedores que acaban de abrir su página de Facebook o TikTok y necesitan verse profesionales ya.",
    whatsappMessage: "¡Hola! Quiero el Kit de Inicio Profesional de Q150.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: "combo-visual",
    slug: "identidad-visual",
    icon: "✨",
    title: "Marca & Organización Pro",
    shortDescription:
      "Tu imagen profesional completa: Logo Premium, Kit de Redes y Catálogo de Productos.",
    fullDescription:
      "Desde Q750. Ideal para emprendedoras que ya tienen ventas constantes y quieren subir de nivel su organización visual.",
    features: [
      "Diseño de Logotipo Pro (3 propuestas)",
      "Manual de Marca Básico",
      "Ads para Historias (Instagram/WhatsApp)",
      "Catálogo de productos (10 items)",
      "Diseño de tarjeta digital",
    ],
    idealFor: "Negocios con ventas activas que buscan estandarizar su comunicación visual.",
    whatsappMessage: "¡Hola! Me interesa el plan de Marca & Organización de Q750.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    id: "estructura-web",
    slug: "landing-pages",
    icon: "🌐",
    title: "Estructura Web Pro",
    shortDescription:
      "Tu sitio web profesional con carga instantánea y optimizado para ventas.",
    fullDescription:
      "Desde Q750. Diseño y código de alto nivel para convertir visitantes en clientes de WhatsApp.",
    features: [
      "Velocidad de Carga Instantánea",
      "Optimización para Móviles",
      "Integración con WhatsApp",
      "Diseño Futurista Premium",
    ],
    idealFor: "Negocios que necesitan presencia profesional con dominio propio.",
    whatsappMessage: "¡Hola! Me interesa la Estructura Web de Q750.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "negocio-app",
    slug: "combo-inicio",
    icon: "🚀",
    title: "Sitio Web Profesional & App",
    price: "Desde Q750\n(aprox. $100 USD)",
    shortDescription:
      "Tecnología de élite para tu negocio: Vue, TypeScript y Tailwind CSS. Sistemas rápidos y generadores de PDF personalizados.",
    fullDescription:
      "Desarrollamos soluciones digitales robustas utilizando el mismo stack tecnológico que gigantes como Nintendo y Microsoft. Desde Q750 para web con despliegue gratuito, hasta Q1,500 para una solución completa con dominio propio.",
    features: [
      "Desarrollo con Vue.js & TypeScript",
      "Estilos avanzados con Tailwind CSS",
      "Generadores de PDF para pedidos/recibos",
      "Código optimizado (CSS Puro)",
      "Despliegue en la Nube de Alta Velocidad",
      "Integración total con WhatsApp Business",
    ],
    idealFor: "Negocios establecidos que quieren automatizar sus cierres.",
    whatsappMessage: "¡Hola! Me interesa un Sitio Web Profesional.",
    gradient: "from-blue-600 to-cyan-500",
  },
];

// ============================================================
// PROCESS STEPS
// ============================================================

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Cotiza",
    description: "Cuéntanos tu idea por WhatsApp y te enviamos una propuesta personalizada.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Diseñamos",
    description: "Creamos tu solución digital con atención a cada detalle.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Vendes Más",
    description: "Lanzamos tu proyecto y empiezas a ver resultados reales.",
    icon: "📈",
  },
] as const;

// ============================================================
// HELPERS
// ============================================================

export function getWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message ?? BUSINESS.whatsapp.defaultMessage);
  return `https://wa.me/${BUSINESS.whatsapp.number}?text=${msg}`;
}
