'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

import { SCROLL_DISTANCES } from '@/app/_lib/constants';

/**
 * BackgroundHeroSection: animated background elements for the hero section.
 * Uses centralized scroll distances for maintainable animation triggers.
 */
function BackgroundHeroSection() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, SCROLL_DISTANCES.HERO_FADE, [1, 0]);

    const shapes = [
        {
            key: 'flower',
            type: 'image',
            className:
                'absolute left-[50%] top-[55%] z-[-200] h-[600px] w-[240px] translate-x-[-50%] translate-y-[-50%] rotate-[70deg] blur-[30px] max-sm:h-[200px]',
            src: '/images/ui/flower.webp',
            alt: 'flower',
            priority: true,
        },
        {
            key: 'radial',
            type: 'div',
            className:
                'absolute left-[50%] top-[-230px] z-[-1] h-[600px] w-[800px] translate-x-[-50%] overflow-hidden rounded-full blur-[80px] max-sm:w-full',
            style: {
                background:
                    'radial-gradient(circle, #095dff 0%, #bd09ff3e 40%, #bd09ff00 80%)',
            },
        },
        {
            key: 'linear1',
            type: 'div',
            className:
                'absolute right-0 top-[485px] z-[-1] h-[461px] w-[461px] opacity-[30%] blur-[150px] max-sm:right-0 max-sm:w-full',
            style: {
                background:
                    'linear-gradient(to bottom, #4D54E8 0%, #4D54E8 37%)',
            },
        },
        {
            key: 'linear2',
            type: 'div',
            className:
                'absolute left-[-58px] top-[642px] z-[-1] h-[291px] w-[291px] opacity-[30%] blur-[90px] max-sm:hidden',
            style: {
                background:
                    'linear-gradient(to bottom, #4D54E8 0%, #4D54E8 37%)',
            },
        },
        {
            key: 'linear3',
            type: 'div',
            className:
                'absolute left-[-52px] top-[-129px] z-[-1] h-[291px] w-[291px] opacity-[80%] blur-[150px] max-sm:hidden',
            style: { background: 'linear-gradient(to bottom, #1A00FF 100%)' },
        },
        {
            key: 'bg',
            type: 'div',
            className:
                'absolute left-[-52px] top-[153px] z-[-1] h-[326px] w-[326px] bg-[#171817a8] opacity-[80%] blur-[400px] max-sm:hidden max-sm:w-full',
        },
    ];

    return (
        <div className="overflow-hidden">
            <motion.div style={{ opacity }} className="lights transition-all">
                {shapes.map(shape =>
                    shape.type === 'image' ? (
                        <div key={shape.key} className={shape.className}>
                            <Image
                                src={shape.src!}
                                fill
                                alt={shape.alt!}
                                priority={!!shape.priority}
                            />
                        </div>
                    ) : (
                        <div
                            key={shape.key}
                            className={shape.className}
                            {...(shape.style && { style: shape.style })}
                        />
                    )
                )}
            </motion.div>
        </div>
    );
}

export default BackgroundHeroSection;
