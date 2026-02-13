import { WorkShowcase } from "@/components/walwebs/WorkShowcase";
import { PageNavigation } from "@/components/walwebs/ui/PageNavigation";
import { ArchBackground } from "@/components/walwebs/ArchBackground";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portafolio de Proyectos | Walter García - WalWeb",
    description: "Explora mi portafolio de proyectos: desde desarrollo web y aplicaciones móviles hasta soluciones de IA. Diseño que se encuentra con la funcionalidad.",
};

export default function TrabajoPage() {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden pt-20">
            {/* Background Grid */}
            <ArchBackground />

            <div className="relative z-10">
                <WorkShowcase />
                <PageNavigation nextPath="/perfil/mundial" nextLabel="Mundial 2026" />
            </div>
        </div>
    );
}
