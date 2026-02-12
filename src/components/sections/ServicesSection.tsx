"use client";

import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";

export default function ServicesSection() {
    // Group services by level - MULTIMEDIA FIRST
    const contentServices = SERVICES.filter(s => s.id === "produccion-audiovisual");
    const basicServices = SERVICES.filter(s => s.id === "combo-visual");
    const mediumServices = SERVICES.filter(s => s.id === "catalogo-digital" || s.id === "catalogo-digital-autos");
    const highServices = SERVICES.filter(s => s.id === "landing-pages" || s.id === "servicios-empresariales" || s.id === "combo-inicio");
    const specialServices = SERVICES.filter(s => s.id === "combo-eventos");

    return (
        <section id="servicios" className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Nuestros Servicios"
                    title="Contenido que convierte"
                    subtitle="Desde videos y multimedia hasta landing pages completas. Soluciones digitales para emprendedores de Guatemala y EE.UU."
                />

                {/* Business Model Explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white"
                >
                    <h3 className="text-2xl font-black mb-4 text-center">Nuestro Enfoque</h3>
                    <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
                        Especializados en <strong className="text-white">contenido multimedia que vende por ti</strong>. Videos, reels, edición profesional y producción audiovisual. También ofrecemos landing pages y sistemas web con precios accesibles para todos.
                    </p>
                </motion.div>

                {/* CONTENIDO AUDIOVISUAL - PRIMERO */}
                {contentServices.length > 0 && (
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                                🎥 Nuestra Especialidad
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">
                                Contenido Multimedia que Vende
                            </h3>
                            <p className="text-slate-600 mb-1">
                                <strong>Precio bajo solicitud</strong> · Lo que mejor hacemos
                            </p>
                            <p className="text-slate-500 text-sm">
                                Videos, reels, TikToks, edición profesional. Contenido optimizado para convertir seguidores en clientes.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {contentServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* NIVEL BÁSICO */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                            Nivel Básico
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                            Tu Primera Imagen Profesional
                        </h3>
                        <p className="text-slate-600 mb-1">
                            <strong>$20 - $50 USD</strong> · Ideal para empezar
                        </p>
                        <p className="text-slate-500 text-sm">
                            Logo, imágenes de marca, plantillas para redes sociales. Sin necesidad de página web.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {basicServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* NIVEL MEDIO */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                            Nivel Medio
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                            Organiza y Vende Digitalmente
                        </h3>
                        <p className="text-slate-600 mb-1">
                            <strong>Precio bajo solicitud</strong> · Para negocios activos
                        </p>
                        <p className="text-slate-500 text-sm">
                            Catálogos digitales para lives, inventarios de vehículos, productos en stock.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediumServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* NIVEL ALTO */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                            Nivel Alto
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                            Plataformas Completas y Mini Apps
                        </h3>
                        <p className="text-slate-600 mb-1">
                            <strong>Precio bajo solicitud</strong> · Para negocios establecidos
                        </p>
                        <p className="text-slate-500 text-sm">
                            Landing pages con formularios, sitios corporativos, catálogos interactivos, sistemas personalizados.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* CONTENIDO AUDIOVISUAL */}
                {contentServices.length > 0 && (
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                                Contenido Audiovisual
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">
                                Videos que Venden por Ti
                            </h3>
                            <p className="text-slate-600 mb-1">
                                <strong>Precio bajo solicitud</strong>
                            </p>
                            <p className="text-slate-500 text-sm">
                                Edición de lives, reels, TikToks y contenido optimizado para convertir.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {contentServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* EVENTOS ESPECIALES */}
                {specialServices.length > 0 && (
                    <div className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-black uppercase tracking-wider mb-2">
                                Eventos Especiales
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">
                                Tu Celebración, de Principio a Fin
                            </h3>
                            <p className="text-slate-600 mb-1">
                                <strong>Desde $150 USD</strong> · Bodas, quinceaños, cumpleaños
                            </p>
                            <p className="text-slate-500 text-sm">
                                Invitación digital + confirmaciones + imprimible + video recuerdo.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specialServices.map((service, index) => (
                                <ServiceCard key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
