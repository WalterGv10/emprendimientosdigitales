import { Metadata } from "next";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";
import { BUSINESS, SERVICES, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "Contáctanos por WhatsApp para una cotización gratuita. Soluciones digitales para emprendedoras.",
};

export default function ContactoPage() {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <AnimateIn className="text-center mb-14">
                    <span className="inline-block rounded-full bg-coral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral-600 mb-3">
                        Contacto
                    </span>
                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                        ¿Lista para profesionalizar tu negocio?
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Escríbenos por WhatsApp y cuéntanos tu idea. Te responderemos lo antes posible con una propuesta personalizada.
                    </p>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Main CTA */}
                    <AnimateIn direction="left">
                        <div className="rounded-2xl bg-gradient-to-br from-coral-500 to-plum-500 p-8 text-white shadow-xl">
                            <h2 className="text-2xl font-bold mb-4">WhatsApp</h2>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Es la forma más rápida de contactarnos. Recibe una cotización personalizada sin compromiso.
                            </p>
                            <Button
                                variant="whatsapp"
                                size="lg"
                                href={getWhatsAppUrl()}
                                external
                                className="bg-white text-coral-600 hover:bg-white/90 shadow-none"
                            >
                                💬 Abrir WhatsApp
                            </Button>
                        </div>
                    </AnimateIn>

                    {/* Quick links */}
                    <AnimateIn direction="right">
                        <div className="rounded-2xl border border-slate-200 bg-white p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cotización Rápida</h2>
                            <p className="text-slate-500 mb-6">
                                Selecciona el servicio que te interesa y te enviaremos un mensaje pre-escrito:
                            </p>
                            <div className="space-y-3">
                                {SERVICES.map((service) => (
                                    <a
                                        key={service.id}
                                        href={getWhatsAppUrl(service.whatsappMessage)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:bg-coral-50 hover:border-coral-200 transition-all group"
                                    >
                                        <span className="text-xl">{service.icon}</span>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-coral-600 transition-colors">
                                            {service.title}
                                        </span>
                                        <svg className="ml-auto h-4 w-4 text-slate-400 group-hover:text-coral-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimateIn>
                </div>

                {/* Email fallback */}
                <AnimateIn className="mt-12 text-center">
                    <p className="text-sm text-slate-400">
                        ¿Prefieres email? Escríbenos a{" "}
                        <a href={`mailto:${BUSINESS.email}`} className="text-coral-500 hover:text-coral-700 font-medium transition-colors">
                            {BUSINESS.email}
                        </a>
                    </p>
                </AnimateIn>
            </div>
        </section>
    );
}
