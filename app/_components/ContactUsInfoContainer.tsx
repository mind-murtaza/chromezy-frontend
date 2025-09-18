'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * ContactUsInfoContainer: motion wrapper sizing the left panel by scroll.
 */
export default function ContactUsInfoContainer({ children }: { children: React.ReactNode }) {
    const { scrollY } = useScroll();
    const height = useTransform(scrollY, [4550, 4750], [651, 760]);

    return (
            <motion.div className="relative h-[760px] w-[70%] max-md:h-[450px] max-md:w/full" style={{ height }}>
                {children}
            </motion.div>
    );
}
