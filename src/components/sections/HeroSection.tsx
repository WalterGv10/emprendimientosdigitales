"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";
import { ArrowRight, DollarSign, Globe2, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/lib/animation-utils";

export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-4 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-24 lg:pb-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero2.webp"
                    alt="Background"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
            </div>

            {/* Static Background Gradients - Better Performance */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[80%] md:w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[100px] md:blur-[140px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[80%] md:w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[100px] md:blur-[140px]" />
                <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[80px]" />
            </div>

            {/* Grid Pattern & Stars */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

            <div className="relative z-10 container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Main Message */}
                    <div className="text-center lg:text-left pt-8 lg:pt-0">
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
                            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
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
                                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent italic"
                            >
                                vende por ti
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            <strong className="text-white">Deja de perder clientes por falta de presencia digital.</strong> Convertimos tus lives, productos y servicios en <span className="text-cyan-400 font-bold">páginas web profesionales</span> que venden 24/7. Desde Guatemala hasta Estados Unidos.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                                delay: 0.6
                            }}
                            className="flex justify-center lg:justify-start"
                        >
                            <motion.a
                                href="#servicios"
                                whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full"
                            >
                                Ver servicios →
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right - Price Tiers */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col gap-3 sm:gap-4"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                            {/* App Card (Moved to top via flex order on Large Screens) */}
                            <div className="order-3 lg:order-1 lg:row-span-3 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden min-h-[140px] sm:min-h-[160px] lg:h-full">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/negoapp.webp"
                                        alt="App"
                                        fill
                                        className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-cyan-900/40" />
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-start justify-between mb-2 sm:mb-4">
                                            <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Sitio Web <br className="hidden sm:block" /> Profesional</h3>
                                            <div className="text-right">
                                                <span className="text-base sm:text-xl font-black text-cyan-400 block">Desde Q750</span>
                                                <p className="text-[10px] sm:text-xs text-slate-400 font-bold">web + dominio</p>
                                                <p className="text-[9px] sm:text-[10px] text-slate-500 font-semibold">Q1,500 con dominio propio</p>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                                            Desarrollamos <strong className="text-white">páginas web profesionales</strong> con videos, animaciones de alta calidad y contenido interactivo. Sistema completo de ventas en línea.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                                            <div>
                                                <span className="text-[10px] sm:text-xs text-cyan-400 font-black uppercase tracking-wider block mb-2">✨ Tecnología</span>
                                                <div className="flex flex-wrap items-start gap-2 sm:gap-3">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-5 sm:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">React</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="h-5 sm:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-0 invert" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Next</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/astro/FF5D01" alt="Astro" className="h-5 sm:h-6 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Astro</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block mb-2">Usadas por:</span>
                                                <div className="flex flex-wrap items-start gap-2 sm:gap-3">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="h-4 sm:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="h-4 sm:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/netflix/E50914" alt="Netflix" className="h-4 sm:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="h-4 sm:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] sm:text-xs text-slate-200 font-semibold">📱 Optimizado para móviles, tabletas y computadoras</span>
                                    </div>
                                </div>
                            </div>

                            {/* Identidad Card */}
                            <div className="order-1 lg:order-2 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden min-h-[140px] sm:min-h-[160px]">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/brandingdigital.webp"
                                        alt="Branding"
                                        fill
                                        className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-slate-950/40" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-2 sm:mb-4">
                                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Identidad <br className="hidden sm:block" /> & Arranque</h3>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">Desde Q150</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $20 USD</p>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[90%]">
                                        Despegue profesional con <strong className="text-white">Logotipos, Kit de Redes y Landing</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Escalabilidad Card */}
                            <div className="order-2 lg:order-3 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden min-h-[140px] sm:min-h-[160px]">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/presenciadigital.webp"
                                        alt="Escalabilidad"
                                        fill
                                        className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-900/40" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-2 sm:mb-4">
                                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Escalabilidad <br className="hidden sm:block" /> Digital</h3>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black text-blue-400 block">Desde Q250</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $35 USD</p>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[90%]">
                                        Ventas masivas con <strong className="text-white">Catálogos e Inventarios</strong> para cierres inmediatos.
                                    </p>
                                </div>
                            </div>

                            {/* Celebraciones Card */}
                            <div className="order-4 lg:order-4 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-pink-500/30 transition-all duration-500 overflow-hidden min-h-[140px] sm:min-h-[160px]">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/invitacionbackg.webp"
                                        alt="Celebraciones"
                                        fill
                                        className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-pink-900/40" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-2 sm:mb-4">
                                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Celebraciones <br className="hidden sm:block" /> de Élite</h3>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black text-pink-400 block">Desde Q400</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $50 USD</p>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[90%]">
                                        <strong className="text-white">Invitaciones Interactivas</strong> con confirmación inteligente para tus momentos especiales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="text-center pt-2">
                            <p className="text-[10px] sm:text-xs text-slate-500 flex items-center justify-center gap-2">
                                <Sparkles className="w-3 h-3" />
                                <span>Tecnología accesible para todos emprendedores</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
