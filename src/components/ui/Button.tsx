import Link from "next/link";
import { motion } from "framer-motion";

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

    const motionProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 }
    };

    if (href && external) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                {...motionProps}
            >
                {children}
            </motion.a>
        );
    }

    if (href) { // For Next.js Link we use a motion.div wrapper or pass motion component to Link (if supported) 
        // but commonly with Next Link we wrap children. 
        // However, cleaner approach with framer-motion is using a motion component.
        // Since Next Link passes href to child, we can use a motion.a or wrap Link in motion.div.
        // Let's use a motion.div wrapper for the link to keep it simple and semantic 
        // or just apply classes to the Link and assume its a navigational element.
        // Actually, for best interaction feel, let's wrap the content of the Link.
        // Or better, make the Link itself a motion component using motion.create(Link).
        // Simplest robust way: 
        return (
            <Link href={href}>
                <motion.span className={classes} {...motionProps} style={{ display: 'inline-flex' }}>
                    {children}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            {...motionProps}
        >
            {children}
        </motion.button>
    );
}
