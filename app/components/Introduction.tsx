'use client';
import Image from 'next/image';
import GridText from './GridText';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

import { INTRODUCTION } from '@/app/lib/constants';

function Introduction() {
    const { scrollY } = useScroll();
    const gap = useTransform(
        scrollY,
        INTRODUCTION.SCROLL_RANGE,
        INTRODUCTION.GAP_RANGE
    );
    const [gapWidth, setGapWidth] = useState(() => gap.get());

    useEffect(() => {
        const unsubscribe = gap.on('change', latest => setGapWidth(latest));
        return () => unsubscribe && unsubscribe();
    }, [gap]);

    const metrics = [
        ['200%', 'Revenue Growth'],
        ['4X', 'Speed to Market'],
        ['73%', 'New Orders'],
        ['10K+', 'Active Users'],
    ];

    return (
        <motion.div
            className="relative z-[1000] mt-[110px] flex min-h-[597px] w-full flex-col items-center px-20 text-center max-md:px-14 max-sm:px-6"
            style={{ gap: `${gapWidth}px` }}
        >
            <div className="flex flex-col items-center gap-3">
                <div className="flex h-[56px] items-center justify-center gap-2.5 py-4">
                    <Image
                        src="/images/hero/magic-wand-icon.webp"
                        width={16}
                        height={16}
                        alt="magic wand icon"
                        priority
                    />
                    <p className="font-inter font-medium text-[#ECF4BD]">
                        Introducing AI Automation
                    </p>
                </div>
                <p className="text-center text-[clamp(36px,6vw,64px)] font-semibold">
                    from <span className="text-[#11DEFF]">CONCEPT</span>
                    <br /> to <span className="text-[#4380FF]">REALITY</span>
                </p>
                <p className="text-[clamp(16px,2vw,24px)] text-[#BDF4D0]">
                    We Engineer your Software Success & Digital Transformation.
                </p>
            </div>
            <p className="max-w-[698px] text-center text-[clamp(14px,1.7vw,16px)]">
                At Chromezy, we translate your ideas into market-ready solutions
                quickly and precisely. Leveraging the power of technology and
                prioritizing user needs, we deliver products that are both
                cutting-edge and user-centric.
            </p>
            <div className="grid min-h-[153px] w-full max-w-[817px] grid-cols-[repeat(auto-fill,_minmax(120px,1fr))] items-center justify-center gap-[49px] px-[56px] py-10 max-md:grid-cols-[repeat(auto-fill,_minmax(100px,1fr))] max-md:px-2">
                {metrics.map(([value, label], idx) => (
                    <div key={idx}>
                        <GridText>{value}</GridText>
                        <p className="text-sm">{label}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Introduction;
