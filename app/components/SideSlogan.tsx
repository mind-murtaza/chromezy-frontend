'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

export default function SideSlogan() {
    const { scrollY } = useScroll();
    const [paddingBlockOffset, setPaddingBlockOffset] = useState(120);
    const height = useTransform(scrollY, [3500, 4250], [859, 550]);
    const opacity = useTransform(scrollY, [3500, 4250], [1, 0.35]);
    const paddingBlock = useTransform(scrollY, [3500, 4250], [120, 10]);
    const [width, setWidth] = useState(0);
    const animation =
        width >= 1280
            ? { height, paddingBlock: `${paddingBlockOffset}px`, opacity }
            : {};

    function handleRefreshValues() {
        setPaddingBlockOffset(paddingBlock.get());
    }

    scrollY.on('change', handleRefreshValues);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return window.removeEventListener('resize', () =>
            setWidth(window.innerWidth)
        );
    }, []);

    return (
        <>
            <motion.div
                className="SideSlogan w-[40%] overflow-hidden rounded-[80px] bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] px-10 backdrop-blur-[30px] max-lg:h-[500px] max-lg:w-full max-lg:p-10 max-md:rounded-[30px]"
                style={animation}
            >
                <p className="w-[85%] text-[clamp(24px,3vw,40px)] font-semibold max-sm:w-full">
                    Innovative Services Keeping Us Ahead
                </p>
                <p className="mt-5 text-[#ffffffcc]">
                    Discover the impact of bespoke digital solutions tailored
                    precisely to your business&apos;s distinct requirements.
                </p>
                <div className="relative aspect-square w-[clamp(200px,25vw,376px)] max-lg:mx-auto">
                    <Image
                        src={'/images/ui/colored-circle.webp'}
                        fill
                        alt="colored circle"
                        className="mix-blend-exclusion"
                    />
                </div>
            </motion.div>
        </>
    );
}
