"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";
import { useReducedMotion } from "@/lib/animation-utils";

import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
    const pathname = usePathname();
    const shouldReduceMotion = useReducedMotion();

    if (pathname?.startsWith("/perfil")) return null;

    return (
        <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30 hover:bg-whatsapp-dark hover:scale-110 transition-all"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: 1, type: "spring", stiffness: 260, damping: 20 }
            }
            style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
            aria-label="Contactar por WhatsApp"
            whileHover={shouldReduceMotion ? {} : { y: -3 }}
        >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.17 1.603 5.99L.06 23.708a.5.5 0 00.637.632l5.777-1.567A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.93 9.93 0 01-5.264-1.503l-.378-.224-3.925 1.065 1.045-3.867-.246-.39A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
        </motion.a>
    );
}
