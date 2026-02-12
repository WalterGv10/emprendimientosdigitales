"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-slate-950">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-coral-500/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-coral-400 mb-8 md:mb-12 backdrop-blur-3xl">
                        Escala tu negocio hoy
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-8 md:mb-12 px-4">
                        EL FUTURO DE TU <br />
                        <span className="gradient-text italic">MARCA ES AQUÍ</span>
                    </h2>

                    <p className="max-w-xl mx-auto text-base md:text-lg lg:text-xl text-slate-400 font-medium mb-12 md:mb-16 leading-relaxed px-4">
                        No dejes tus ventas al azar. Implementamos la ingeniería digital que tu esfuerzo merece.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 px-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 md:px-12 py-4 md:py-6 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm overflow-hidden flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-center"
                        >
                            <span className="relative z-10">Iniciar Proyecto</span>
                            <div className="relative z-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-950 flex items-center justify-center text-white text-xs group-hover:bg-coral-500 transition-colors">
                                →
                            </div>
                            <div className="absolute inset-0 bg-coral-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none opacity-10" />
                        </motion.a>

                        <a
                            href="mailto:wgarcia.10@outlook.com"
                            className="text-white/50 hover:text-white text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] transition-colors border-b border-white/20 pb-1"
                        >
                            O envíanos un email
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Kinetic decorative element - Hidden on mobile */}
            <div className="hidden md:block mt-24 lg:mt-32 border-t border-white/5 pt-12">
                <div className="flex justify-center gap-16 lg:gap-24 opacity-10">
                    <span className="text-4xl lg:text-6xl font-black text-white italic">STRATEGY</span>
                    <span className="text-4xl lg:text-6xl font-black text-white italic">DESIGN</span>
                    <span className="text-4xl lg:text-6xl font-black text-white italic">RESULTS</span>
                </div>
            </div>
        </section>
    );
}
