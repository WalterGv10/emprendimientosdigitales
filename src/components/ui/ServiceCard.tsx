"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/constants";

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col rounded-3xl md:rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden"
        >
            {/* Index Number */}
            <span className="absolute top-6 md:top-8 right-8 md:right-10 text-xs md:text-sm font-black text-slate-200 group-hover:text-coral-100 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
            </span>

            {/* Icon */}
            <div
                className={`mb-8 md:mb-10 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.gradient} text-3xl md:text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}
            >
                {service.icon}
            </div>

            {/* Content */}
            <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">
                {service.title}
            </h3>

            <p className="mb-6 md:mb-8 flex-1 text-sm md:text-base leading-relaxed text-slate-500 font-medium">
                {service.shortDescription}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 mt-auto">
                <Link
                    href={`/servicios/${service.slug}`}
                    className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-coral-500 hover:border-coral-500 transition-all text-center sm:text-left"
                >
                    Detalles
                </Link>

                <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center justify-center gap-3 px-5 md:px-6 py-3 rounded-full bg-slate-950 text-white text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-whatsapp active:scale-95"
                >
                    <span className="relative z-10">Cotizar</span>
                    <svg className="relative z-10 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>
            </div>

            {/* Hover Decorator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral-500/5 blur-[40px] rounded-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
        </motion.article>
    );
}
