'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { SCROLL_BALL } from '@/app/_lib/constants';

/**
 * ScrollBallImage: decorative ball following scroll.
 * Uses centralized constants for maintainable animation values.
 */

export default function ScrollBallImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const top = useTransform(scrollY, SCROLL_BALL.RANGES, SCROLL_BALL.TOP_VALUES);
    const right = useTransform(scrollY, SCROLL_BALL.RANGES, SCROLL_BALL.RIGHT_VALUES);
    const size = useTransform(scrollY, SCROLL_BALL.RANGES, SCROLL_BALL.SIZE_VALUES);
    const blur = useTransform(scrollY, SCROLL_BALL.RANGES, SCROLL_BALL.BLUR_VALUES);
    const opacity = useTransform(scrollY, SCROLL_BALL.RANGES, SCROLL_BALL.OPACITY_VALUES);
    const filter = useTransform(blur, b => `blur(${b}px)`);

    if (reduce) return null;

    return (
        <motion.div
            className="absolute z-[-1] max-lg:hidden"
            style={{
                top,
                right,
                width: size,
                height: size,
                filter,
                opacity,
            }}
        >
            <Image
                src="/images/ui/ball.webp"
                fill
                alt="ball"
                priority
                className="object-cover"
                quality={100}
            />
        </motion.div>
    );
}
