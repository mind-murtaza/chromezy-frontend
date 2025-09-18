'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { SCROLL_WHITE_BALL } from '@/app/_lib/constants';

/**
 * ScrollWhiteBall: decorative parallax white globe following scroll.
 * Uses centralized constants for maintainable animation values.
 */
export default function ScrollWhiteBall() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const top = useTransform(scrollY, SCROLL_WHITE_BALL.RANGES, SCROLL_WHITE_BALL.TOP_VALUES);
    const left = useTransform(scrollY, SCROLL_WHITE_BALL.RANGES, SCROLL_WHITE_BALL.LEFT_VALUES);
    const size = useTransform(scrollY, SCROLL_WHITE_BALL.RANGES, SCROLL_WHITE_BALL.SIZE_VALUES);
    const rotate = useTransform(scrollY, SCROLL_WHITE_BALL.RANGES, SCROLL_WHITE_BALL.ROTATE_VALUES);

    if (reduce) return null;

    return (
        <motion.div
            className="absolute z-[-2] mix-blend-plus-lighter max-lg:hidden"
            style={{ top, left, width: size, height: size, rotate }}
        >
            <Image src="/images/ui/glob.webp" fill alt="white ball" priority className="object-cover" />
        </motion.div>
    );
}
