import { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
    title: "Servicios",
    description:
        "Soluciones digitales para emprendedoras: landing pages, catálogos digitales, desarrollo web, manuales interactivos, producción audiovisual y combos de inicio.",
};

export default function ServiciosPage() {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="Nuestros Servicios"
                    title="Soluciones para cada etapa de tu negocio"
                    subtitle="No importa si apenas empiezas o si ya vendes por lives. Tenemos la solución perfecta para ti."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
