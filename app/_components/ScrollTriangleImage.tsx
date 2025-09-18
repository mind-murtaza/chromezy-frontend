'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';

/**
 * ScrollTriangleImage: decorative triangle responding to scroll.
 * Notes: Structure-only improvements; styles unchanged.
 */
const SCROLL_RANGES: number[] = [0, 731, 1123, 1887, 2651, 3515];
const TOP_VALUES: number[] = [138, 843, 1300, 2200, 2640, 3400];
const LEFT_VALUES: number[] = [-390, -130, -45, -115, -450, -450];
const SIZE_VALUES: number[] = [669, 409, 191, 434, 816, 816];
const BLUR_VALUES: number[] = [10, 5, 14, 7, 14, 14];
const OPACITY_VALUES: number[] = [1, 1, 1, 1, 1, 0];

export default function ScrollTriangleImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const top = useTransform(scrollY, SCROLL_RANGES, TOP_VALUES);
    const left = useTransform(scrollY, SCROLL_RANGES, LEFT_VALUES);
    const size = useTransform(scrollY, SCROLL_RANGES, SIZE_VALUES);
    const blur = useTransform(scrollY, SCROLL_RANGES, BLUR_VALUES);
    const opacity = useTransform(scrollY, SCROLL_RANGES, OPACITY_VALUES);
    const filter = useTransform(blur, b => `blur(${b}px)`);

    if (reduce) return null;

    return (
        <motion.div
            className="absolute z-[-1] mix-blend-plus-lighter max-lg:hidden"
            style={{
                top,
                left,
                width: size,
                height: size,
                filter,
                opacity,
            }}
        >
            <Image
                src="/images/ui/colorful-triangle.webp"
                fill
                alt="colorful triangle"
                priority
                className="object-cover"
            />
        </motion.div>
    );
}
