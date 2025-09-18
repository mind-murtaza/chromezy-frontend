'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useWindowWidth } from '../hooks/useWindowSize';

type HiddenTopAnimation = {
    children: React.ReactNode;
    distance: [number, number];
    maxScreen: number;
};

function HiddenTopAnimation({
    children,
    distance,
    maxScreen,
}: HiddenTopAnimation) {
    const width = useWindowWidth();
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, distance, [
        1,
        width >= maxScreen ? 0 : 1,
    ]);

    return <motion.div style={{ opacity }}>{children}</motion.div>;
}

export default HiddenTopAnimation;
