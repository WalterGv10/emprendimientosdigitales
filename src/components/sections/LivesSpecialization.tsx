"use client";

import { motion } from "framer-motion";

const categories = [
    {
        title: "PROX RETAIL",
        icon: "🛍️",
        description: "Escalabilidad total para ventas minoristas post-transmisión.",
        color: "from-blue-600/20 to-indigo-600/20",
        accent: "bg-blue-500",
        id: "01"
    },
    {
        title: "AGENCY AUTO",
        icon: "🚗",
        description: "Vitrina digital premium para el sector automotriz.",
        color: "from-slate-700/20 to-slate-900/20",
        accent: "bg-slate-500",
        id: "02"
    },
    {
        title: "REAL ESTATE",
        icon: "🏗️",
        description: "Estructura de cierre para lotificaciones y preventas.",
        color: "from-emerald-600/20 to-teal-600/20",
        accent: "bg-emerald-500",
        id: "03"
    },
    {
        title: "CONSULTING",
        icon: "💼",
        description: "Sistemas de agenda y autoridad para profesionales.",
        color: "from-purple-600/20 to-plum-600/20",
        accent: "bg-plum-500",
        id: "04"
    },
];

export default function LivesSpecialization() {
    return (
        <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#0A0A0A]">
            {/* Decorative center light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-coral-500/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 lg:mb-24 gap-8 md:gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
                        >
                            <div className="h-px w-8 md:w-12 bg-coral-500" />
                            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-coral-500">Industry Segments</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none"
                        >
                            ESPECIFICIDAD <br />
                            <span className="text-white/20">COMO ESTRATEGIA</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l border-white/10 pl-6 md:pl-8"
                    >
                        No creemos en soluciones genéricas. Cada industria tiene un lenguaje propio y nosotros lo digitalizamos para maximizar el retorno.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative h-[350px] md:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-gradient-to-br ${cat.color} p-6 md:p-8 flex flex-col justify-end transition-all hover:border-white/20`}
                        >
                            {/* Background ID */}
                            <span className="absolute top-6 md:top-8 right-6 md:right-8 text-6xl md:text-8xl font-black text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors uppercase italic">
                                {cat.id}
                            </span>

                            {/* Icon Orb */}
                            <div className={`mb-auto w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${cat.accent} flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-coral-400 transition-colors uppercase">
                                    {cat.title}
                                </h3>
                                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[200px]">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Action Button (Implicit) */}
                            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm md:text-base">
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
