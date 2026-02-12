"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    const words = [
        "LANDING PAGES", "ESTRATEGIA DIGITAL", "VENTAS EN VIVO", "CATÁLOGOS PREMIUM",
        "REAL ESTATE", "AGENCY AUTO", "BRANDING", "UI/UX DESIGN",
        "LANDING PAGES", "ESTRATEGIA DIGITAL", "VENTAS EN VIVO", "CATÁLOGOS PREMIUM",
    ];

    return (
        <div className="relative py-8 md:py-12 bg-coral-500 overflow-hidden select-none">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 md:gap-12 whitespace-nowrap"
            >
                {words.map((word, i) => (
                    <span
                        key={i}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-slate-950 uppercase italic tracking-tighter"
                    >
                        {word} •
                    </span>
                ))}
            </motion.div>

            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>
    );
}
