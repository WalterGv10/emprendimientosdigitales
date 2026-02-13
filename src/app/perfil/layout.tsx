import LightPillar from "@/components/walwebs/LightPillar";
import { StarField } from "@/components/walwebs/ui/StarField";
import { Header } from "@/components/walwebs/Header";
import { Footer } from "@/components/walwebs/Footer";
import JsonLd from "@/components/walwebs/JsonLd";

export default function WalwebsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <JsonLd />
            <LightPillar
                topColor="#0066cc"
                bottomColor="#00f2ff"
                intensity={0.4}
                interactive={true}
                pillarWidth={30.0}
            />
            <StarField />
            <Header />
            {children}
            <Footer />
        </div>
    );
}
