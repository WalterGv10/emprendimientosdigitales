"use client";

import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";

export default function ServicesSection() {
    // Group services by level
    const contentServices = SERVICES.filter(s => s.id === "produccion-audiovisual");
    const basicServices = SERVICES.filter(s => s.id === "identidad-arranque" || s.id === "combo-visual");
    const mediumServices = SERVICES.filter(s => s.id === "identidad-profesional" || s.id === "catalogo-digital-autos");
    const highServices = SERVICES.filter(s => s.id === "landing-inmobiliaria" || s.id === "servicios-empresariales" || s.id === "combo-inicio" || s.id === "estructura-web" || s.id === "negocio-app");
    const specialServices = SERVICES.filter(s => s.id === "combo-eventos");

    return (
        <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Nuestros Servicios"
                    title="Soluciones a tu Medida"
                    subtitle="Desde tu primera identidad digital hasta aplicaciones web escalables. Tecnología premium accesible para todos."
                />

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 🎨 ARRANQUE & IDENTIDAD — The "Why so cheap" section     */}
                {/* ═══════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 sm:mb-16"
                >
                    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
                        <div className="max-w-3xl">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 uppercase">
                                🚀 Empujón Inicial para Emprendedores
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                Diseñamos estos paquetes pensando en quienes están abriendo su primer Live o página. <strong className="text-slate-950">¿Por qué el precio es tan bajo?</strong> Porque queremos ser tus aliados tecnológicos desde el día 1. Si te ayudamos a verte profesional hoy, creceremos juntos mañana cuando necesites una infraestructura más grande.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {basicServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 🎥 MULTIMEDIA — Content section                         */}
                {/* ═══════════════════════════════════════════════════════ */}
                {contentServices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 sm:mb-16 md:mb-20 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-6 sm:p-8 md:p-12"
                    >
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/15 rounded-full blur-[80px]" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-red-500/20 border border-red-500/30 rounded-full text-xs sm:text-sm font-bold text-red-300 mb-4 sm:mb-6">
                                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                                    🎥 Potencia tus Redes
                                </div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                                    Multimedia y<br />
                                    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">Edición Pro</span>
                                </h3>
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6 max-w-lg">
                                    Extraemos lo mejor de tus transmisiones para crear clips que sigan vendiendo mientras duermes.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                {contentServices.map((service, index) => (
                                    <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className={`flex-shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-2xl sm:text-3xl shadow-lg`}>
                                                {service.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base sm:text-lg font-black text-white mb-1 uppercase tracking-tight">{service.title}</h4>
                                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">{service.shortDescription}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                                            <a href={`/servicios/${service.slug}`} className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                                                Detalles →
                                            </a>
                                            <a href={getWhatsAppUrl(service.whatsappMessage)} target="_blank" rel="noopener noreferrer"
                                                className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 hover:bg-red-400 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider transition-colors">
                                                Cotizar
                                                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 📊 ESCALABILIDAD — Catalog Services                     */}
                {/* ═══════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 px-4">
                            Catálogos Inteligentes & <span className="text-blue-600">Escala</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {mediumServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 🚀 TRANSFORMACIÓN PRO — Structure and Apps                */}
                {/* ═══════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 sm:mb-16 md:mb-20"
                >
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 px-4 uppercase">
                            Infraestructura Web <span className="text-cyan-500">Premium</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {highServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════════════════════ */}
                {/* 🎉 EVENTOS — Elegant Pink Accent                        */}
                {/* ═══════════════════════════════════════════════════════ */}
                {specialServices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 sm:mb-16"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-6 sm:mb-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/50">
                            <div className="w-1.5 sm:w-2 h-16 sm:h-20 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full flex-shrink-0 hidden sm:block" />
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 bg-pink-500/10 text-pink-700 rounded-lg text-xs font-black uppercase tracking-wider mb-2">
                                    🎉 Eventos Especiales
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">
                                    Tu Celebración, de Principio a Fin
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 mb-1">
                                    <strong className="text-pink-600">Desde $150 USD</strong> · Bodas, quinceaños, cumpleaños
                                </p>
                                <p className="text-xs sm:text-sm text-slate-500">
                                    Invitación digital + confirmaciones + imprimible + video recuerdo.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {specialServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
