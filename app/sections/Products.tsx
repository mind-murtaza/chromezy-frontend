'use client';
import React from 'react';
import { useReducedMotion } from 'motion/react';
import HiddenTopAnimation from '@/app/components/HiddenTopAnimation';
import BlurBallAnimation from '@/app/components/BlurBallAnimation';
import GoTopAnimation from '@/app/components/GoTopAnimation';
import SectionHeader from '@/app/components/SectionHeader';
import ProductsCardsRows from '@/app/components/ProductsCardsRows';
import VioletLight from '@/app/components/VioletLight';
import { SCROLL_DISTANCES, ANIMATION_BREAKPOINTS } from '@/app/lib/constants';

/**
 * ProductsSection: Product engineering showcase with animated backgrounds and cards.
 * Uses centralized constants for maintainable scroll triggers and breakpoints.
 */
export default function ProductsSection() {
    const reduceMotion = useReducedMotion();

    return (
        <HiddenTopAnimation distance={SCROLL_DISTANCES.PRODUCTS_HIDDEN} maxScreen={ANIMATION_BREAKPOINTS.SERVICES_ANIMATION}>
            {!reduceMotion && (
                <VioletLight
                    className="left-[50%] h-[445px] w-[445px] translate-x-[-50%]"
                    distance={SCROLL_DISTANCES.VIOLET_LIGHT.PRODUCTS}
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
