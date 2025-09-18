'use client';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';
import Image from 'next/image';
import { BLUR_BALL } from '@/app/lib/constants';

/**
 * BlurBallAnimation: scroll-reactive blurred ball element.
 * Uses centralized constants for maintainable animation values.
 */
export default function BlurBallAnimation() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const top = useTransform(
        scrollY,
        BLUR_BALL.SCROLL_RANGE,
        BLUR_BALL.TOP_RANGE
    );
    const scale = useTransform(
        scrollY,
        BLUR_BALL.SCROLL_RANGE,
        BLUR_BALL.SCALE_RANGE
    );

    return (
        !reduce && (
            <motion.div
                className="absolute right-0 z-[-1] blur-[6px] max-sm:hidden"
                style={{ top, scale }}
            >
                <Image
                    src="/images/ui/ball.webp"
                    width={639}
                    height={639}
                    alt="ball"
                    priority
                />
            </motion.div>
        )
    );
}
