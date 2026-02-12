"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect user's motion preference
 * Respects 'prefers-reduced-motion' media query for accessibility
 * @returns boolean - true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
    const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setShouldReduceMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setShouldReduceMotion(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return shouldReduceMotion;
}

/**
 * Transition preset for users who prefer reduced motion
 * Instantly completes animations without visual movement
 */
export const reduceMotionTransition = {
    duration: 0,
    delay: 0,
};

/**
 * Animation variants for responsive performance
 * Simpler animations on mobile devices
 */
export const getResponsiveAnimation = (isMobile: boolean) => ({
    duration: isMobile ? 0.3 : 0.6,
    distance: isMobile ? 10 : 20,
});
