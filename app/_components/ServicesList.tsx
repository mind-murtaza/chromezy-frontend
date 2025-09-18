'use client';
import React, { useEffect, useState } from 'react';
import ServicesField from '@/app/_components/ServicesField';
import { ServicesData } from '@/app/_lib/Data';
import GoTopAnimation from '@/app/_components/GoTopAnimation';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

/**
 * ServicesList: animated list of service categories and technologies.
 */
export default function ServicesList() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const gap = useTransform(scrollY, [3500, 4250], [40, 0]);
    const [width, setWidth] = useState(0);
    const [gapWidth, setGapWidth] = useState(40);
    const animation = !reduce && width >= 1300 ? { gap: gapWidth } : {};

    useEffect(() => {
        setWidth(window.innerWidth);
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        if (reduce) return;
        const unsubscribe = scrollY.on('change', () => setGapWidth(gap.get()));
        return () => {
            unsubscribe?.();
        };
    }, [gap, reduce, scrollY]);

    return (
        <>
            <motion.div className="flex w-[51%] flex-col gap-10 max-lg:w-full" style={animation}>
                {ServicesData.map((tech, idx) => (
                    <GoTopAnimation key={idx} idx={idx} startNumber={0}>
                        <ServicesField title={tech.title} Services={tech.Services} idx={idx + 1} />
                    </GoTopAnimation>
                ))}
            </motion.div>
        </>
    );
}
