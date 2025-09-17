'use client';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';
import Image from 'next/image';

/**
 * BlurBallAnimation: scroll-reactive blurred ball element.
 */
export default function BlurBallAnimation() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const top = useTransform(scrollY, [751, 1123], [0, -750]);
    const scale = useTransform(scrollY, [751, 1123], [1, 0.2]);

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
