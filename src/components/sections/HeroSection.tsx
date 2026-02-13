"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";
import { ArrowRight, DollarSign, Globe2, Sparkles, Smartphone, Tablet, Monitor } from "lucide-react";
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
                            {/* Sitio Web Profesional - Producto Estrella (Full width on mobile) */}
                            <div className="order-1 lg:order-1 col-span-1 lg:row-span-3 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden min-h-[380px] sm:min-h-[420px] lg:h-full">
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
                                                <span className="text-[10px] sm:text-xs text-cyan-400 font-black uppercase tracking-wider block mb-2">✨ Tecnología de Vanguardia</span>
                                                <div className="flex flex-wrap items-start gap-2 sm:gap-3">
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">React</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="h-4 sm:h-5 w-auto opacity-90 brightness-0 invert" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Next</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/astro/FF5D01" alt="Astro" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Astro</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" alt="Vue.js" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Vue</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">TS</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="h-4 sm:h-5 w-auto opacity-90 rounded-[2px]" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">JS</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">Tailwind</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-4 sm:h-5 w-auto opacity-90" />
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">CSS3</span>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1">
                                                        <div className="h-4 sm:h-5 w-4 sm:w-5 flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-red-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M10 13v-2" /><path d="M10 13v2" /><path d="M10 13h1.5a1.5 1.5 0 0 0 0-3H10" /><path d="M14 13v-2" /><path d="M14 13v2" /><path d="M14 13h1.5a1.5 1.5 0 0 0 0-3H14" /></svg>
                                                        </div>
                                                        <span className="text-[7px] sm:text-[8px] text-slate-400 font-semibold">PDF Gen</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block mb-2 uppercase tracking-tighter">Empresas que confían en este stack:</span>
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                                    <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://cdn.simpleicons.org/netflix/E50914" alt="Netflix" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="Nintendo" className="h-4 sm:h-5 w-auto opacity-80 bg-white/10 rounded px-1" />
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://cdn.simpleicons.org/shopify/96bf48" alt="Shopify" className="h-4 sm:h-5 w-auto opacity-80" />
                                                    <img src="https://cdn.simpleicons.org/airbnb/FF5A5F" alt="Airbnb" className="h-4 sm:h-5 w-auto opacity-80" />
                                                </div>
                                                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3">
                                                    <div className="flex -space-x-1">
                                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 z-30 relative" title="Móvil">
                                                            <Smartphone className="w-3 h-3 text-cyan-400" />
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 z-20 relative" title="Tablet">
                                                            <Tablet className="w-3 h-3 text-cyan-400" />
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 z-10 relative" title="PC">
                                                            <Monitor className="w-3 h-3 text-cyan-400" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[9px] sm:text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">100% Responsivo / Responsive</span>
                                                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Se ve perfecto en <strong className="text-white">cualquier pantalla</strong> / Looks perfect on any screen</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Identidad Card */}
                            <div className="order-2 lg:order-2 lg:col-span-1 group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden min-h-[140px] sm:min-h-[160px]">
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
                                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Kit de Inicio <br className="hidden sm:block" /> Profesional</h3>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">Desde Q150</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $20 USD</p>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[95%] mb-4">
                                        ¿No estás listo para invertir mucho? <strong className="text-white">Profesionalicemos tus redes</strong>. Logo + Portada + 3 Anuncios + <strong className="text-white">Catálogo PDF</strong> para mostrar tus productos sin complicaciones.
                                    </p>
                                    <div className="flex items-center gap-3 bg-slate-950/40 w-fit px-3 py-1.5 rounded-full border border-white/5">
                                        <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="h-4 w-4 opacity-80" />
                                        <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="h-4 w-4 opacity-80" />
                                        <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" className="h-4 w-4 opacity-80 brightness-0 invert" />
                                        <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="h-4 w-4 opacity-80" />
                                    </div>
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
                                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Identidad <br className="hidden sm:block" /> Profesional Elite</h3>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black text-blue-400 block">Desde Q350</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $45 USD</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 flex flex-wrap gap-x-2 gap-y-1">
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">💼 Consultores</span>
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">🏠 Inmobiliaria</span>
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">🩺 Salud</span>
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">🎸 Músicos & DJs</span>
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">📱 Influencers</span>
                                        <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/20">🎵 TikTokers</span>
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[95%] mb-4 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-0.5">�</span>
                                            <span>CV Web <strong className="text-white">Interactivo y Animado</strong></span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-0.5">🎨</span>
                                            <span>Portafolio <strong className="text-white">Pro de Logros</strong></span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-400 mt-0.5">�</span>
                                            <span>QR de Bolsillo <strong className="text-white">para Networking</strong></span>
                                        </div>
                                    </div>
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
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/30 mb-2">
                                                <Sparkles className="w-2 h-2 text-pink-400" />
                                                <span className="text-[8px] font-bold text-pink-300 uppercase tracking-wider">Tendencia</span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-black text-white leading-tight">Celebraciones <br className="hidden sm:block" /> de Élite</h3>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-base sm:text-xl font-black text-pink-400 block">Desde Q400</span>
                                            <p className="text-[10px] sm:text-xs text-slate-400 font-bold">aprox. $50 USD</p>
                                        </div>
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[95%] mb-4 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <span className="text-pink-400 mt-0.5">🌐</span>
                                            <span><strong className="text-white">Landing + Dominio Gratis</strong></span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-pink-400 mt-0.5">🖨️</span>
                                            <span>Opción de <strong className="text-white">Archivo Imprimible</strong></span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-pink-400 mt-0.5">🎬</span>
                                            <span>Edición de <strong className="text-white">Video de Agradecimiento</strong> para el evento</span>
                                        </div>
                                    </div>

                                    {/* Feature Icons */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1" title="Ubicación GPS">
                                            <div className="w-5 h-5 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10">
                                                <svg className="w-3 h-3 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <span className="text-[9px] text-slate-400 font-medium">GPS</span>
                                        </div>
                                        <div className="flex items-center gap-1" title="Confirmación WhatsApp">
                                            <div className="w-5 h-5 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10">
                                                <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            </div>
                                            <span className="text-[9px] text-slate-400 font-medium">WhatsApp</span>
                                        </div>
                                        <div className="flex items-center gap-1" title="Cuenta Regresiva">
                                            <div className="w-5 h-5 rounded-full bg-slate-800/50 flex items-center justify-center border border-white/10">
                                                <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <span className="text-[9px] text-slate-400 font-medium">Timer</span>
                                        </div>
                                    </div>
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
