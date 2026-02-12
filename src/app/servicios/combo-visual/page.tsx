import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Instagram, MonitorPlay, Palette, Sparkles, UserCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Combo Visual Emprendedora | Emprendedoras Digital",
    description: "Tu imagen profesional lista para usar. Logo, foto de perfil y publicidad para redes sociales.",
};

export default function ComboVisualPage() {
    const whatsappUrl = getWhatsAppUrl("¡Hola! Me interesa el Combo Visual para mejorar mi imagen en redes.");

    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-fuchsia-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/30 border border-fuchsia-500/30 text-fuchsia-300 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Plan de Inicio Rápido</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Emprende con una <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                            Imagen Profesional
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl mb-10 leading-relaxed">
                        No necesitas una página web para verte experta. Diseñamos tu logo, portada y publicidad para que vendas más en redes sociales desde el primer día.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-white bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full font-semibold transition-all shadow-lg shadow-fuchsia-600/20 hover:scale-105"
                        >
                            Pedir mi Combo Visual
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

                {/* Visual Demo - Placeholders & Prompts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {/* Item 1: Logo */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-fuchsia-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-fuchsia-500/10 rounded-lg flex items-center justify-center mb-4 text-fuchsia-400">
                            <Palette className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Logotipo Moderno</h3>
                        <p className="text-slate-400 text-sm mb-4">Diseño único que representa la esencia de tu marca.</p>
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-fuchsia-500/20 transition-colors p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPT SUGERIDO:</span>
                            <p className="text-fuchsia-300/70 text-xs italic select-all">"A minimalist modern logo for a boutique clothing store, elegant font, pastel colors, vector style, white background."</p>
                        </div>
                    </div>

                    {/* Item 2: Profile Pic */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                            <UserCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Foto de Perfil</h3>
                        <p className="text-slate-400 text-sm mb-4">Editada y optimizada para generar confianza inmediata.</p>
                        <div className="aspect-square rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-purple-500/20 transition-colors mx-auto w-3/4 p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPT SUGERIDO:</span>
                            <p className="text-purple-300/70 text-xs italic select-all">"Professional profile photo of a friendly woman shop owner, smiling, bokeh clothing store background, high quality."</p>
                        </div>
                    </div>

                    {/* Item 3: Story Ad */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                            <Instagram className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Historia de Venta</h3>
                        <p className="text-slate-400 text-sm mb-4">Diseño vertical atractivo para promociones en IG/WhatsApp.</p>
                        <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-blue-500/20 transition-colors w-2/3 mx-auto p-2 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPT SUGERIDO:</span>
                            <p className="text-blue-300/70 text-[10px] italic select-all">"Instagram story sale advertisement, vertical format, text 'GRAN VENTA', clothes rack background, aesthetic, pink and gold."</p>
                        </div>
                    </div>

                    {/* Item 4: Video Thumb */}
                    <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-pink-400">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Miniatura Video</h3>
                        <p className="text-slate-400 text-sm mb-4">Portada para tus lives o videos que invita al clic.</p>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border border-slate-700/50 group-hover:border-pink-500/20 transition-colors mt-8 p-4 text-center">
                            <span className="text-slate-500 text-xs font-mono mb-2">PROMPT SUGERIDO:</span>
                            <p className="text-pink-300/70 text-xs italic select-all">"YouTube video thumbnail for fashion haul, 'TENDENCIAS' text, excited woman holding bags, bright colors, 4k."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-900/50 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">¿Por qué empezar con el Combo Visual?</h2>
                            <p className="text-slate-400 mb-8 text-lg">
                                Muchos negocios fallan no por su producto, sino porque no transmiten confianza. Una imagen cuidada le dice a tu cliente: "Soy profesional, puedes confiar en mí".
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Te diferencias de la competencia informal.",
                                    "Generas más confianza en clientes nuevos.",
                                    "Tus estados de WhatsApp se ven más atractivos.",
                                    "Creas una marca reconocible a largo plazo.",
                                    "Inversión baja con alto impacto visual."
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-fuchsia-500 shrink-0" />
                                        <span className="text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20 border border-white/10 p-1">
                            <div className="absolute inset-0 bg-fuchsia-500/10 blur-3xl" />
                            <div className="relative bg-slate-950/80 backdrop-blur-sm rounded-xl p-8 text-center">
                                <span className="text-4xl font-bold text-white block mb-2">Q350</span>
                                <span className="text-fuchsia-400 font-medium uppercase tracking-wider text-sm">Pago Único</span>
                                <hr className="my-6 border-slate-800" />
                                <h4 className="text-xl font-semibold mb-4">¿Qué incluye?</h4>
                                <ul className="text-slate-400 space-y-2 mb-8 text-sm">
                                    <li>• Diseño de Logotipo (2 propuestas)</li>
                                    <li>• Foto de Perfil editada</li>
                                    <li>• 3 Plantillas para historias</li>
                                    <li>• Portada para Facebook</li>
                                </ul>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                                >
                                    Lo quiero ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
