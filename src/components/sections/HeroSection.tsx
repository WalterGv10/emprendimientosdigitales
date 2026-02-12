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
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: 0.1
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl mb-6 cursor-default"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Globe2 className="w-4 h-4 text-orange-400" />
                            </motion.div>
                            <span className="text-xs font-black uppercase tracking-wider text-orange-200">
                                Guatemala → EE.UU. → El Mundo
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
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm uppercase tracking-wider rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
                            >
                                Cotizar proyecto
                                <motion.div
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </motion.a>
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
                        <div className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-green-400/30 transition-all duration-500 overflow-hidden">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500" />

                            {/* Glow effect */}
                            <div className="absolute -inset-px bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                            <div className="relative">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🚀</span>
                                        <h3 className="text-xl font-black text-white">Básico</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent block">Q150 - Q400</span>
                                        <p className="text-xs text-slate-400">$20 - $50</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300">
                                    Logos, imágenes de marca, landing sencilla. <strong className="text-white">Tu primera imagen profesional.</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">💼</span>
                                    <h3 className="text-xl font-black text-white">Medio</h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-black text-blue-400 block">Cotización</span>
                                    <p className="text-xs text-slate-400">En Q y $</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300">
                                Catálogo digital para lives, inventarios. <strong className="text-white">Organiza tus ventas.</strong>
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">⚡</span>
                                    <h3 className="text-xl font-black text-white">Alto</h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-black text-purple-400 block">Empresarial</span>
                                    <p className="text-xs text-slate-400">Personalizado</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300">
                                Mini apps, catálogos interactivos, landing completas. <strong className="text-white">Plataforma completa.</strong>
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 hover:from-pink-500/20 hover:to-purple-500/20 transition-all">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🎉</span>
                                    <h3 className="text-xl font-black text-white">Eventos</h3>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-black text-pink-400 block">Desde Q1,200</span>
                                    <p className="text-xs text-slate-400">aprox. $150</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300">
                                Invitación digital + confirmación + imprimible + video. <strong className="text-white">Tu evento memorable.</strong>
                            </p>
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
