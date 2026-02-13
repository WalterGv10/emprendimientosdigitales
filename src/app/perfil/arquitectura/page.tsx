import { ArchWorkflow } from "@/components/walwebs/ArchWorkflow";
import { PageNavigation } from "@/components/walwebs/ui/PageNavigation";
import { ArchHero } from "@/components/walwebs/ArchHero";
import { ArchServices } from "@/components/walwebs/ArchServices";
import { ArchBenefits } from "@/components/walwebs/ArchBenefits";
import { ArchBackground } from "@/components/walwebs/ArchBackground";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Arquitectura y Diseño 3D | WalWeb",
    description: "Servicios de modelado 3D, documentación técnica y planos de ejecución con precisión arquitectónica.",
};

export default function ArchitecturePage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Background Grid - Global for the entire page */}
            <ArchBackground />

            {/* Content Wrapper */}
            <div className="relative z-10">
                <ArchHero />
                <ArchServices />
                <ArchBenefits />
                <ArchWorkflow />
                {/* Updated to link to Contacto as per original flow, which is /perfil/contacto */}
                <PageNavigation nextPath="/perfil/contacto" nextLabel="Hablemos de tu Proyecto" />
            </div>
        </div>
    );
}
