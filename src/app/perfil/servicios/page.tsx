import { Services } from "@/components/walwebs/Services";
import { TechExpertise } from "@/components/walwebs/TechExpertise";
import { CommercialBanner } from "@/components/walwebs/CommercialBanner";
import { DigitalCVAction } from "@/components/walwebs/DigitalCVAction";
import { PageNavigation } from "@/components/walwebs/ui/PageNavigation";
import { ArchBackground } from "@/components/walwebs/ArchBackground";
import { ManualsSection } from "@/components/walwebs/ManualsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios Digitales y Tech | WalWeb",
    description: "Desarrollo web, apps para quinielas, automatización de negocios e integración de IA. Tecnología para gente que trabaja.",
};

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden pt-32 lg:pt-40">
            {/* Fondo dinámico */}
            <ArchBackground />

            <div className="relative z-10 space-y-0">
                <Services />
                <TechExpertise />
                <ManualsSection />
                <DigitalCVAction />
                <CommercialBanner />
            </div>

            {/* Navegación flotante */}
            <PageNavigation
                nextPath="/perfil/trayectoria"
                nextLabel="Trayectoria"
                subLabel="Conoce mi historia"
            />
        </main>
    );
}
