'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CONTACT_INFO } from '@/app/lib/constants';

/**
 * ContactUsInfoContainer: motion wrapper sizing the left panel by scroll.
 * Uses centralized constants for maintainable animation values.
 */
export default function ContactUsInfoContainer({ children }: { children: React.ReactNode }) {
    const { scrollY } = useScroll();
    const height = useTransform(scrollY, CONTACT_INFO.SCROLL_RANGE, CONTACT_INFO.HEIGHT_RANGE);

    return (
            <motion.div className="relative h-[760px] w-full lg:w-[70%] max-md:h-[450px] max-md:w/full" style={{ height }}>
                {children}
            </motion.div>
    );
}
