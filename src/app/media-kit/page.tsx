import Link from "next/link";
import { BUSINESS, getWhatsAppUrl } from "@/lib/constants";

export const metadata = {
    title: "Media Kit | Ofertas Especiales",
    description: "Tarifas y planes para transformación digital.",
};

export default function MediaKitPage() {
    const offers = [
        {
            title: "ESTRUCTURA WEB",
            price: "Q750",
            features: [
                "Desarrollo de Landing Page",
                "Optimización para Móviles",
                "Velocidad de Carga Instantánea",
                "Integración con WhatsApp"
            ],
            color: "from-blue-600 to-indigo-700",
            tag: "DISEÑO Y CÓDIGO"
        },
        {
            title: "IDENTIDAD DIGITAL",
            price: "Q750",
            subPrice: "Costo Anual",
            features: [
                "Dominio Propio (.com / .net)",
                "Correo Electrónico de Empresa",
                "Configuración de DNS",
                "Seguridad SSL Incluida"
            ],
            color: "from-emerald-600 to-teal-700",
            tag: "INFRAESTRUCTURA"
        },
        {
            title: "NEGOCIO EN APP",
            price: "Q750",
            subPrice: "aprox. $100 USD",
            features: [
                "Automatización de Ventas",
                "Escalabilidad Post-Live",
                "Interfaz de Usuario Premium",
                "Gestión de Inventario"
            ],
            color: "from-coral-500 to-orange-600",
            tag: "TRANSFORMACIÓN"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <span className="text-coral-500 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Tarifario 2026</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic">MEDIA KIT</h1>
                    <p className="text-slate-400 font-medium">Transformación digital estratégica al alcance de tu emprendimiento.</p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {offers.map((offer) => (
                        <div key={offer.title} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${offer.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                            <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                                <span className="text-[10px] font-black text-white/40 tracking-widest mb-6 block uppercase">{offer.tag}</span>
                                <h2 className="text-3xl font-black mb-2 tracking-tight">{offer.title}</h2>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">desde {offer.price}</span>
                                    {offer.subPrice && (
                                        <p className="text-coral-500 font-bold mt-1">{offer.subPrice}</p>
                                    )}
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {offer.features.map((f) => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-coral-500"></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={getWhatsAppUrl(`¡Hola! Me interesa el plan de ${offer.title}.`)}
                                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${offer.color} text-center font-black text-sm tracking-tighter uppercase hover:scale-[1.02] transition-transform`}
                                >
                                    Solicitar ahora
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl border border-white/5 bg-white/[0.02] text-center">
                    <p className="text-slate-500 text-sm font-medium italic">
                        "Desarrollamos Aplicaciones a medida que automatizan y escalan tu operación."
                    </p>
                </div>
            </div>
        </div>
    );
}
