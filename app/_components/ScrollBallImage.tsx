'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';

/**
 * ScrollBallImage: decorative ball following scroll.
 * Notes: No style changes; only code structure and a11y improvements.
 */
const SCROLL_RANGES: number[] = [0, 731, 1123, 1887, 2651, 3515, 4500, 5200];
const TOP_VALUES: number[] = [98, 1130, 1250, 1730, 2640, 3550, 4970, 5400];
const RIGHT_VALUES: number[] = [-20, 200, -17, 97, -17, -17, 545, 780];
const SIZE_VALUES: number[] = [350, 350, 669, 418, 639, 639, 350, 350];
const BLUR_VALUES: number[] = [0, 0, 0, 10, 15, 40, 10, 35];
const OPACITY_VALUES: number[] = [1, 1, 1, 1, 1, 0.25, 1, 0.6];

export default function ScrollBallImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const top = useTransform(scrollY, SCROLL_RANGES, TOP_VALUES);
    const right = useTransform(scrollY, SCROLL_RANGES, RIGHT_VALUES);
    const size = useTransform(scrollY, SCROLL_RANGES, SIZE_VALUES);
    const blur = useTransform(scrollY, SCROLL_RANGES, BLUR_VALUES);
    const opacity = useTransform(scrollY, SCROLL_RANGES, OPACITY_VALUES);
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
