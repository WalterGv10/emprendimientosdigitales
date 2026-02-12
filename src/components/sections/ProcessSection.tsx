"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
    return (
        <section id="proceso" className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Kinetic Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
                <h2 className="text-[40vw] md:text-[30vw] font-black text-white whitespace-nowrap tracking-tighter">
                    WORKFLOW • WORKFLOW • WORKFLOW
                </h2>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 md:px-4 py-1 rounded-full border border-coral-500/30 text-coral-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-6"
                    >
                        Success Method
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-6 md:mb-8">
                        TU CAMINO <br />
                        <span className="text-white/20 uppercase">AL ÉXITO</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-8 md:p-12 rounded-2xl md:rounded-[3rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
                        >
                            <div className="absolute top-8 md:top-10 right-8 md:right-10 text-3xl md:text-4xl font-black text-white/5 group-hover:text-coral-500/20 transition-colors">
                                {step.number}
                            </div>

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-3xl md:text-4xl mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 tracking-tight uppercase">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connecting Arrow (Desktop Only) */}
                            {i < 2 && (
                                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 opacity-30">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        </section>
    );
}
