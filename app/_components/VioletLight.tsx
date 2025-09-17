'use client';
import React from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';

export interface VioletLightProps {
    className: string;
    distance: [number, number];
}

/**
 * VioletLight: decorative radial gradient element reacting to scroll position.
 */
export default function VioletLight({ className, distance }: VioletLightProps) {
    const { scrollY } = useScroll();
    const shouldReduce = useReducedMotion();
    const opacityLight = useTransform(scrollY, distance, [0.4, 1]);

    return !shouldReduce ? (
        <motion.div
            className={`absolute blur-[100px] max-md:h-full max-md:w-full ${className}`}
            style={{
                opacity: opacityLight,
                background:
                    'radial-gradient(circle, #095dff 0%, #bd09ff47 30%, #bd09ff00 80%)',
            }}
        />
    ) : null;
}
