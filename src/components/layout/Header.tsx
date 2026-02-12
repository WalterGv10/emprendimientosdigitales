"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5"
                : "py-8 bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
                    <img
                        src="/logoemp.png"
                        alt="Logo"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    />
                    <span className="text-lg md:text-xl font-black tracking-tighter uppercase transition-colors text-white">
                        EMPRENDIMIENTOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">DIGITALES</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-purple-400 relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full text-white/70 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-3 rounded-full bg-slate-900/50 border border-orange-500/50 px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl hover:bg-orange-600 hover:border-orange-600 hover:scale-105 active:scale-95 transition-all"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Consultoría Directa
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 flex md:hidden h-12 w-12 items-center justify-center rounded-2xl transition-colors bg-white/10 text-white hover:bg-white/20"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <div className="flex flex-col gap-1.5 font-black">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 origin-center bg-white"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-0.5 w-6 bg-white"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 origin-center bg-white"
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        className="fixed inset-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
                    >
                        <div className="space-y-8 text-center">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-4xl font-black text-white hover:text-coral-500 transition-colors uppercase tracking-tighter"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="pt-12"
                            >
                                <a
                                    href={getWhatsAppUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 rounded-full bg-coral-500 px-10 py-5 text-sm font-black text-white uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    CONSULTORÍA WHATSAPP
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
