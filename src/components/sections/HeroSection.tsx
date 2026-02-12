"use client";

import { motion } from "framer-motion";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";
import { ArrowRight, DollarSign, Globe2, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero1.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
            </div>

            {/* Animated Background Gradients (Reduced opacity for better blend) */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[80%] md:w-[60%] h-[60%] rounded-full bg-orange-500/30 blur-[80px] md:blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, -50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[80%] md:w-[60%] h-[60%] rounded-full bg-blue-500/30 blur-[80px] md:blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.35, 0.2],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-cyan-400/20 blur-[100px]"
                />
            </div>

            {/* Grid Pattern & Stars */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

            {/* Animated Scanlines */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[size:100%_4px] pointer-events-none"
            />

            {/* Diagonal Light Rays */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
                >
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(251,146,60,0.08)_10deg,transparent_20deg)]" />
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Main Message */}
                    <div className="text-center lg:text-left">
                        {/* Floating Badge with Spring Physics */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-slate-900/40 border border-white/10 backdrop-blur-2xl mb-8 group hover:border-orange-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Globe2 className="w-4 h-4 text-orange-500" />
                                    <div className="absolute inset-0 bg-orange-500/40 blur-md rounded-full animate-pulse" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                    Guatemala
                                </span>
                            </div>

                            <div className="h-4 w-[1px] bg-white/10" />

                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-200 transition-colors">
                                EE.UU.
                            </span>

                            <div className="h-4 w-[1px] bg-white/10" />

                            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                El Mundo
                            </span>
                        </motion.div>

                        {/* Title with Stagger Effect */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: 0.2
                            }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
                        >
                            Contenido que
                            <br />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: 0.4
                                }}
                                className="bg-gradient-to-r from-orange-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent italic"
                            >
                                vende por ti
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            className="text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Especializados en <strong className="text-white">contenido multimedia, videos y producción audiovisual</strong> para emprendedores.
                            También landing pages y sistemas web. Desde Guatemala hasta Estados Unidos, con precios accesibles.
                        </motion.p>

                        {/* CTA Buttons with Micro-interactions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                                delay: 0.6
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >

                            <motion.a
                                href="#servicios"
                                whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500/30 text-white font-bold text-sm uppercase tracking-wider rounded-full"
                            >
                                Ver servicios
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right - Price Tiers */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-4"
                    >
                        {/* Tier Cards */}
                        <div className="group relative bg-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-orange-500/30 transition-all duration-500 overflow-hidden min-h-[160px]">
                            {/* Background Image for the Card */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/brandingdigital.png"
                                    alt="Branding Digital"
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950/40" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-black text-white leading-tight">Identidad <br /> & Arranque</h3>
                                    <div className="text-right">
                                        <span className="text-xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent block">Desde Q150</span>
                                        <p className="text-xs text-slate-400 font-bold">aprox. $20 USD</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed max-w-[85%]">
                                    Despegue profesional con <strong className="text-white">Logotipos de alto impacto, Kit de Redes y Landing optimizada</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-500 overflow-hidden min-h-[160px]">
                            {/* Background Image for the Card */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/presenciadigital.png"
                                    alt="Presencia Digital"
                                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-900/40" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-black text-white leading-tight">Escalabilidad <br /> Digital</h3>
                                    <div className="text-right">
                                        <span className="text-xl font-black text-blue-400 block">Desde Q250</span>
                                        <p className="text-xs text-slate-400 font-bold">aprox. $35 USD</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed max-w-[85%]">
                                    Transforma tus transmisiones en ventas masivas con <strong className="text-white">Catálogos Interactivos e Inventarios</strong> diseñados para cierres inmediatos.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden min-h-[160px]">
                            {/* Background Image for the Card */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/negoapp.png"
                                    alt="Negocio en App"
                                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-cyan-900/40" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-black text-white leading-tight">Transforma tu <br /> Negocio en App</h3>
                                    <div className="text-right">
                                        <span className="text-xl font-black text-cyan-400 block">Desde Q750</span>
                                        <p className="text-xs text-slate-400 font-bold">aprox. $100 USD</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed max-w-[85%]">
                                    Lleva tu empresa al siguiente nivel. Desarrollamos <strong className="text-white">Aplicaciones personalizadas y sistemas robustos</strong> que automatizan y escalan tu operación.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-pink-500/30 transition-all duration-500 overflow-hidden min-h-[160px]">
                            {/* Background Image for the Card */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="/invitacionbackg.png"
                                    alt="Celebraciones Digitales"
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-pink-900/40" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-black text-white leading-tight">Celebraciones <br /> de Próximo Nivel</h3>
                                    <div className="text-right">
                                        <span className="text-xl font-black text-pink-400 block">Desde Q400</span>
                                        <p className="text-xs text-slate-400 font-bold">aprox. $50 USD</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed max-w-[85%]">
                                    Digitaliza tus momentos especiales con <strong className="text-white">Invitaciones Interactivas y Confirmación Inteligente</strong>. Elegancia impulsada por tecnología.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="text-center pt-4">
                            <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                                <Sparkles className="w-3 h-3" />
                                <span>Precios que hacen la tecnología accesible para todos</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
