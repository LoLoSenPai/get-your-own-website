'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialiser Lenis
        const lenis = new Lenis({
            duration: 1.2, // Durée de l'animation
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fonction d'accélération
            smooth: true,
        });
        lenisRef.current = lenis;

        // Fonction pour synchroniser le défilement
        const animate = (time) => {
            lenis.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
