import { WorldCup2026 } from "@/components/walwebs/WorldCup2026";
import { Contact } from "@/components/walwebs/Contact";
import { PageNavigation } from "@/components/walwebs/ui/PageNavigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Estrategia Mundial 2026 | WalWeb",
    description: "Maximiza tus ventas durante el Mundial 2026 con quinielas corporativas, menús dinámicos y promociones automatizadas.",
};

export default function MundialPage() {
    return (
        <div className="w-full pt-20">
            <WorldCup2026 />
            <Contact />
            <PageNavigation nextPath="/perfil/arquitectura" nextLabel="Arquitectura & Diseño" />
        </div>
    );
}
