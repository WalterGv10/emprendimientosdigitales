import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Globe, FileText, Video, Users, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "Combo de Eventos Especiales | Emprendedoras Digital",
    description: "Invitación digital + confirmación + imprimible + video recuerdo. La solución completa para tu evento especial.",
};

export default function ComboEventosPage() {
    const whatsappUrl = getWhatsAppUrl("¡Hola! Me interesa el Combo de Eventos para mi celebración especial.");

    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        <span>Eventos Especiales</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Tu Evento, Digital y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                            Memorable
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed">
                        Bodas, quinceaños, cumpleaños. Desde la invitación digital hasta el video recuerdo. Todo lo que necesitas para que tus invitados vivan una experiencia única.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-white bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all shadow-lg shadow-purple-600/20 hover:scale-105"
                        >
                            Cotizar mi Evento
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                        <Link
                            href="/#servicios"
                            className="inline-flex items-center justify-center px-8 py-4 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full font-medium transition-all"
                        >
                            Ver otros servicios
                        </Link>
                    </div>
                </div>

                {/* What's Included - Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {/* Item 1: Landing Page */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Landing Page Digital</h3>
                        <p className="text-slate-400 text-sm mb-4">Invitación web personalizada con todos los detalles del evento.</p>
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-purple-500/20 transition-colors p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">EJEMPLO:</span>
                            <p className="text-purple-300/70 text-xs italic">Página personalizada con fecha, lugar, horario y mapa interactivo</p>
                        </div>
                    </div>

                    {/* Item 2: Confirmation System */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Confirmación de Asistencia</h3>
                        <p className="text-slate-400 text-sm mb-4">Tus invitados confirman si van y tú recibes sus datos automáticamente.</p>
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-indigo-500/20 transition-colors p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPTS SUGERIDOS:</span>
                            <p className="text-indigo-300/70 text-xs italic select-all">"Wedding guest confirmation form UI, elegant design, purple gradient, mobile responsive"</p>
                        </div>
                    </div>

                    {/* Item 3: Printable */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Archivo Imprimible</h3>
                        <p className="text-slate-400 text-sm mb-4">PDF de alta calidad para invitaciones físicas tradicionales.</p>
                        <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-blue-500/20 transition-colors w-2/3 mx-auto p-2 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPTS SUGERIDOS:</span>
                            <p className="text-blue-300/70 text-[10px] italic select-all">"Elegant wedding invitation card design, floral borders, gold accents, printable A6 format"</p>
                        </div>
                    </div>

                    {/* Item 4: Video Memory */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-pink-400">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Video Recuerdo</h3>
                        <p className="text-slate-400 text-sm mb-4">Edición profesional post-evento con los mejores momentos.</p>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-pink-500/20 transition-colors mt-8 p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPTS SUGERIDOS:</span>
                            <p className="text-pink-300/70 text-xs italic select-all">"Cinematic wedding video thumbnail, romantic, golden hour, professional videography"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-900/50 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">¿Por qué elegir el Combo de Eventos?</h2>
                            <p className="text-slate-400 mb-8 text-lg">
                                Tu evento merece ser inolvidable desde el primer momento. Con nuestro combo completo, tus invitados vivirán una experiencia moderna y tú tendrás todo organizado en un solo lugar.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Invitaciones digitales ecológicas y modernas.",
                                    "Control total de confirmaciones en tiempo real.",
                                    "Opción tradicional con archivo imprimible incluido.",
                                    "Video emotivo como recuerdo permanente.",
                                    "Ahorra tiempo y dinero en organización.",
                                    "Experiencia premium para ti y tus invitados."
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0" />
                                        <span className="text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/10 p-1">
                            <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />
                            <div className="relative bg-slate-950/80 backdrop-blur-sm rounded-xl p-8 text-center">
                                <span className="text-sm text-purple-400 font-medium uppercase tracking-wider block mb-2">Desde</span>
                                <span className="text-4xl font-bold text-white block mb-2">$150 USD</span>
                                <span className="text-purple-400 font-medium uppercase tracking-wider text-sm">Paquete Completo</span>
                                <hr className="my-6 border-slate-800" />
                                <h4 className="text-xl font-semibold mb-4">Incluye:</h4>
                                <ul className="text-slate-400 space-y-2 mb-8 text-sm text-left">
                                    <li>✓ Landing page personalizada</li>
                                    <li>✓ Sistema de confirmación de asistencia</li>
                                    <li>✓ Base de datos de invitados</li>
                                    <li>✓ Diseño imprimible (PDF)</li>
                                    <li>✓ Video recuerdo post-evento (3-5 min)</li>
                                    <li>✓ Soporte durante todo el proceso</li>
                                </ul>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                                >
                                    Cotizar mi evento
                                </a>
                                <p className="text-xs text-slate-500 mt-4">*Precio puede variar según personalización</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Events */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Ideal para cualquier celebración</h2>
                        <p className="text-slate-400 text-lg">Adaptamos el diseño y contenido a tu tipo de evento</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "💍", title: "Bodas", desc: "Elegancia y romance en cada detalle" },
                            { icon: "👑", title: "Quinceaños", desc: "Un momento especial para recordar siempre" },
                            { icon: "🎂", title: "Cumpleaños", desc: "Celebra a lo grande con estilo" }
                        ].map((event, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-purple-500/30 transition-all">
                                <div className="text-5xl mb-4">{event.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-slate-400 text-sm">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
