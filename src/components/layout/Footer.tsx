"use client";

import Link from "next/link";
import { BUSINESS, SERVICES, getWhatsAppUrl, NAV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12 border-t border-slate-900">
            {/* Massive Kinetic background word */}
            <div className="hidden md:flex absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none scale-150">
                <h2 className="text-[25vw] font-black text-white whitespace-nowrap tracking-tighter uppercase italic">
                    WALWEB ESTUDIO •
                </h2>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-8 group">
                            <img
                                src="/logoemp.png"
                                alt="Logo"
                                className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            />
                            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">
                                EMPRENDIMIENTOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">DIGITALES</span>
                            </span>
                        </Link>
                        <p className="text-base md:text-xl text-slate-400 font-medium leading-relaxed max-w-sm mb-8 md:mb-12">
                            {BUSINESS.description}
                        </p>

                        <div className="flex gap-3 md:gap-4">
                            <a
                                href={BUSINESS.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border border-slate-800 text-slate-400 hover:bg-purple-900/50 hover:text-purple-400 hover:border-purple-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href={BUSINESS.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border border-slate-800 text-slate-400 hover:bg-purple-900/50 hover:text-purple-400 hover:border-purple-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href={BUSINESS.social.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border border-slate-800 text-slate-400 hover:bg-purple-900/50 hover:text-purple-400 hover:border-purple-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20"
                                aria-label="TikTok"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Explorar</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {NAV_LINKS.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors uppercase tracking-tight">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Servicios</h4>
                            <ul className="space-y-3 md:space-y-4">
                                {SERVICES.slice(0, 4).map(service => (
                                    <li key={service.id}>
                                        <Link href={`/servicios/${service.slug}`} className="text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors uppercase tracking-tight line-clamp-2">
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">Contacto</h4>
                            <div className="space-y-3 md:space-y-4">
                                <a href={getWhatsAppUrl()} className="block text-sm font-black text-slate-300 hover:text-purple-400 transition-colors">
                                    WHATSAPP DIRECTO
                                </a>
                                <a href={`mailto:${BUSINESS.email}`} className="block text-xs md:text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors break-all">
                                    {BUSINESS.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legals */}
                <div className="pt-8 md:pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-center sm:text-left">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            © {new Date().getFullYear()} {BUSINESS.name}
                        </span>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-800" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            All Rights Reserved
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Design & Dev By</span>
                        <a
                            href="https://walweb.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center gap-2 group"
                        >
                            Walweb <span className="text-purple-400 group-hover:scale-110 transition-transform">Estudio</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
