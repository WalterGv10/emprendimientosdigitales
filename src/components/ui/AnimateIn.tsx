"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimateInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
};

export default function AnimateIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimateInProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const offset = directionMap[direction];
    const mobileOffset = {
        y: offset.y ? offset.y / 3 : 0,
        x: offset.x ? offset.x / 3 : 0,
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...(isMobile ? mobileOffset : offset) }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: isMobile ? 0.4 : 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
