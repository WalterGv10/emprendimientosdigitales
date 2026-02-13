import dynamic from "next/dynamic";
import { Hero } from "@/components/walwebs/Hero";
import { StrategicVision } from "@/components/walwebs/StrategicVision";
import { PageNavigation } from "@/components/walwebs/ui/PageNavigation";

export default function PerfilPage() {
    return (
        <div className="w-full">
            <Hero />
            <StrategicVision />
            <PageNavigation nextPath="/perfil/servicios" nextLabel="Explorar Servicios" />
        </div>
    );
}
