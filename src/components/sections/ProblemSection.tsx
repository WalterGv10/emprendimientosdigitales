"use client";

import { motion } from "framer-motion";

const painPoints = [
    {
        problem: "LIVES INFINITOS SIN CIERRES",
        description: "Haces transmisiones de 3 horas y las ventas se desvanecen al apagar la cámara.",
        solution: "Catálogo Post-Live Estratégico",
        icon: "⏳"
    },
    {
        problem: "INVENTARIO INVISIBLE",
        description: "Tus productos se ven genéricos y no generan deseo de compra en redes.",
        solution: "Producción Audiovisual Premium",
        icon: "🖼️"
    },
    {
        problem: "ESTANCAMIENTO DIGITAL",
        description: "Sabes que necesitas dar el salto pero la tecnología te parece un muro.",
        solution: "Acompañamiento Walweb",
        icon: "🧱"
    },
];

export default function ProblemSection() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:sticky lg:top-32"
                        >
                            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-coral-500 mb-6 md:mb-8 block">El Secreto de Quienes Facturan Más</span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-6 md:mb-8">
                                TU TIENDA <br />
                                <span className="text-slate-300">ABIERTA</span> <br />
                                24/7
                            </h2>
                            <div className="w-16 md:w-20 h-2 bg-slate-950 mb-6 md:mb-8" />
                            <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm leading-relaxed mb-4">
                                <strong className="text-slate-950">Las empresas que más facturan entienden</strong> que tener presencia digital es tener la tienda abierta las 24 horas.
                            </p>
                            <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm leading-relaxed">
                                Mientras duermes, tu sitio web sigue vendiendo. Mientras estás ocupado, tu catálogo digital sigue convirtiendo.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 space-y-3 md:space-y-4">
                        {painPoints.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[2rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-500"
                            >
                                <div className="flex items-start justify-between mb-6 md:mb-8">
                                    <span className="text-3xl md:text-4xl">{item.icon}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">0{i + 1}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-3 md:mb-4 tracking-tight">
                                    {item.problem}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base font-medium mb-6 md:mb-8 leading-relaxed italic">
                                    &ldquo;{item.description}&rdquo;
                                </p>
                                <div className="inline-flex flex-wrap items-center gap-3 md:gap-4 py-2 px-4 md:px-6 bg-coral-500 text-white rounded-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest">Solución:</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">{item.solution}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
