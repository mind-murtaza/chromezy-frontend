'use client';
import React from 'react';
import { useReducedMotion } from 'motion/react';
import HiddenTopAnimation from '@/app/_components/HiddenTopAnimation';
import BlurBallAnimation from '@/app/_components/BlurBallAnimation';
import GoTopAnimation from '@/app/_components/GoTopAnimation';
import SectionHeader from '@/app/_components/SectionHeader';
import ProductsCardsRows from '@/app/_components/ProductsCardsRows';
import VioletLight from '@/app/_components/VioletLight';

/**
 * ProductsSection: Product engineering showcase with animated backgrounds and cards.
 */
export default function ProductsSection() {
    const reduceMotion = useReducedMotion();

    return (
        <HiddenTopAnimation distance={[1200, 1750]} maxScreen={1300}>
            {!reduceMotion && (
                <VioletLight
                    className="left-[50%] h-[445px] w-[445px] translate-x-[-50%]"
                    distance={[700, 800]}
                />
            )}
            <section
                id="Products"
                aria-label="Product Engineering"
                className="relative space-y-12 p-20 max-md:px-6 max-md:py-10"
            >
                {!reduceMotion && <BlurBallAnimation />}
                <GoTopAnimation idx={0} startNumber={0}>
                    <SectionHeader
                        className="space-y-4"
                        title="Product Engineering"
                        paragraph={`Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.`}
                    />
                </GoTopAnimation>
                <ProductsCardsRows />
            </section>
        </HiddenTopAnimation>
    );
}
