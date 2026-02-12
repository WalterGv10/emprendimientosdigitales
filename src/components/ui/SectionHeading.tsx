interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({
    badge,
    title,
    subtitle,
    centered = true,
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
            {badge && (
                <span className="mb-3 inline-block rounded-full bg-coral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-coral-600">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
