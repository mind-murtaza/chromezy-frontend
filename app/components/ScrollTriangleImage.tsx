'use client';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';
import Image from 'next/image';
import { SCROLL_TRIANGLE } from '@/app/lib/constants';

/**
 * ScrollTriangleImage: decorative triangle responding to scroll.
 * Uses centralized constants for maintainable animation values.
 */

export default function ScrollTriangleImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const top = useTransform(
        scrollY,
        SCROLL_TRIANGLE.RANGES,
        SCROLL_TRIANGLE.TOP_VALUES
    );
    const left = useTransform(
        scrollY,
        SCROLL_TRIANGLE.RANGES,
        SCROLL_TRIANGLE.LEFT_VALUES
    );
    const size = useTransform(
        scrollY,
        SCROLL_TRIANGLE.RANGES,
        SCROLL_TRIANGLE.SIZE_VALUES
    );
    const blur = useTransform(
        scrollY,
        SCROLL_TRIANGLE.RANGES,
        SCROLL_TRIANGLE.BLUR_VALUES
    );
    const opacity = useTransform(
        scrollY,
        SCROLL_TRIANGLE.RANGES,
        SCROLL_TRIANGLE.OPACITY_VALUES
    );
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
