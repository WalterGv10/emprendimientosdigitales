// ============================================================
// BUSINESS INFORMATION
// ============================================================

export const BUSINESS = {
  name: "Emprendimientos Digitales",
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
    id: "catalogo-digital",
    slug: "catalogo-digital",
    icon: "🛍️",
    title: "Ventas por Live (Productos)",
    shortDescription:
      "Convierte tus transmisiones en vivo en ventas automáticas y organizadas.",
    fullDescription:
      "Servicio especializado para quienes venden ropa, accesorios o artículos por Facebook Live. Creamos un resumen visual profesional de tus productos disponibles apenas terminas tu en vivo.",
    features: [
      "Resumen visual inmediato post-live",
      "Organización por tallas y precios",
      "Control de existencias sugerido",
      "Botón de 'Lo quiero' por WhatsApp",
      "PDF profesional del catálogo semanal",
      "Diseño que genera confianza y marca",
    ],
    idealFor: "Emprendedoras que venden por Facebook Live o TikTok Live y quieren organizar sus pedidos.",
    whatsappMessage: "¡Hola! Me interesa organizar las ventas de mis en vivos.",
    gradient: "from-plum-400 to-plum-600",
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
    id: "combo-visual",
    slug: "combo-visual",
    icon: "✨",
    title: "Identidad & Organización",
    shortDescription:
      "Tu imagen profesional lista: Logo, Kit de Redes y Catálogo Inicial.",
    fullDescription:
      "Desde Q750. Ideal para emprendedoras que venden en redes y quieren mejorar su imagen sin gastar en una web completa todavía.",
    features: [
      "Diseño de Logotipo Moderno",
      "Foto de Perfil Profesional",
      "Ads para Historias (Instagram/WhatsApp)",
      "Catálogo de productos inicial",
      "Paleta de colores definida",
    ],
    idealFor: "Emprendedoras que venden en redes sociales.",
    whatsappMessage: "¡Hola! Me interesa el plan de Identidad & Organización de Q750.",
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
    title: "Transforma tu Negocio en App",
    price: "Desde Q750\n(aprox. $100 USD)",
    shortDescription:
      "Desarrollamos Aplicaciones a medida que automatizan y escalan tu operación.\n\n• Q750: Web con dominio en despliegue gratuito\n• Q1,500: Con dominio propio y correo incluido",
    fullDescription:
      "Desde Q750 (aprox. $100 USD). Opciones: Q750 web con dominio en despliegue gratuito. Q1,500 con dominio propio y correo incluido.",
    features: [
      "Q750: Web con dominio en despliegue gratuito",
      "Q1,500: Con dominio propio y correo incluido",
      "Automatización de Ventas",
      "Escalabilidad Post-Live",
    ],
    idealFor: "Negocios establecidos que quieren automatizar sus cierres.",
    whatsappMessage: "¡Hola! Me interesa transformar mi negocio en App.",
    gradient: "from-coral-500 to-orange-600",
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
