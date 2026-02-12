import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getWhatsAppUrl } from "@/lib/constants";
import Button from "@/components/ui/Button";
import AnimateIn from "@/components/ui/AnimateIn";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate all static service pages at build time (SSG)
export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

// Dynamic metadata per service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: service.title,
        description: service.shortDescription,
        openGraph: {
            title: `${service.title} | Emprendedoras Digital`,
            description: service.shortDescription,
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero */}
            <section className={`relative overflow-hidden bg-gradient-to-br ${service.gradient} py-20`}>
                <div className="pointer-events-none absolute inset-0 bg-white/80" />
                <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
                    <AnimateIn>
                        <span className="text-5xl mb-4 block">{service.icon}</span>
                        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl mb-4">
                            {service.title}
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            {service.fullDescription}
                        </p>
                    </AnimateIn>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <AnimateIn>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                            ¿Qué incluye?
                        </h2>
                    </AnimateIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                            <AnimateIn key={i} delay={i * 0.08}>
                                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all">
                                    <svg className="h-5 w-5 shrink-0 text-coral-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section className="py-16 bg-slate-50/50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <AnimateIn>
                        <div className="rounded-2xl border border-plum-100 bg-gradient-to-br from-plum-50 to-coral-50 p-8 text-center">
                            <h2 className="text-xl font-bold text-slate-900 mb-3">
                                ¿Para quién es ideal?
                            </h2>
                            <p className="text-slate-600 leading-relaxed max-w-lg mx-auto">
                                {service.idealFor}
                            </p>
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
                    <AnimateIn>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            ¿Te interesa este servicio?
                        </h2>
                        <p className="text-slate-500 mb-8">
                            Escríbenos por WhatsApp y te enviamos una cotización personalizada. Sin compromiso.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                variant="whatsapp"
                                size="lg"
                                href={getWhatsAppUrl(service.whatsappMessage)}
                                external
                            >
                                💬 Cotizar por WhatsApp
                            </Button>
                            <Button variant="outline" href="/#servicios">
                                ← Ver todos los servicios
                            </Button>
                        </div>
                    </AnimateIn>
                </div>
            </section>
        </>
    );
}
