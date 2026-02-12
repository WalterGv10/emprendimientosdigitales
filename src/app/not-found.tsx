export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <span className="text-6xl mb-6">🔍</span>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
                Página no encontrada
            </h1>
            <p className="text-slate-500 mb-8 max-w-md">
                La página que buscas no existe o fue movida. Regresa al inicio para explorar nuestros servicios.
            </p>
            <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral-500 to-coral-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40 transition-all"
            >
                ← Regresar al Inicio
            </a>
        </section>
    );
}
