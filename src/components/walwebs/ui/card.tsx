import * as React from "react";
import { cn } from "@/lib/walwebs/utils";

import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.4 }}
                ref={ref as any}
                className={cn(
                    "rounded-lg transition-colors",
                    variant === "glass" && "backdrop-blur-md bg-white/5 border border-white/10",
                    variant === "default" && "bg-slate-900 border border-slate-800",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
