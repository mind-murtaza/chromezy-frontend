'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface GoTopAnimationProps {
    idx: number;
    startNumber: number;
    delay?: number;
    children: React.ReactNode;
}

/**
 * GoTopAnimation: animate element into view from top with optional delay.
 */
export default function GoTopAnimation({
    idx,
    startNumber,
    delay = 0,
    children,
}: GoTopAnimationProps) {
    const reduce = useReducedMotion();

    return (
        !reduce && (
            <motion.div
                className="relative"
                initial={{
                    top: idx >= startNumber ? '50px' : '0px',
                    opacity: 0,
                }}
                whileInView={{ top: '0px', opacity: 1 }}
                transition={{ duration: 0.4, delay }}
                viewport={{ amount: 0.15 }}
            >
                {children}
            </motion.div>
        )
    );
}
