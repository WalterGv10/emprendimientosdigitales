import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "whatsapp" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
    className?: string;
    onClick?: () => void;
}

const variants = {
    primary:
        "bg-gradient-to-r from-coral-500 to-coral-600 text-white shadow-lg shadow-coral-500/25 hover:shadow-coral-500/40 hover:from-coral-600 hover:to-coral-700",
    outline:
        "border-2 border-coral-500 text-coral-600 hover:bg-coral-50 hover:border-coral-600",
    whatsapp:
        "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:bg-whatsapp-dark hover:shadow-whatsapp/40",
    ghost:
        "text-slate-600 hover:text-coral-500 hover:bg-coral-50",
} as const;

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
} as const;

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    external = false,
    className = "",
    onClick,
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2";

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href && external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
            </a>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
