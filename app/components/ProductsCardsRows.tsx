'use client';
import React from 'react';
import GoTopAnimation from '@/app/components/GoTopAnimation';
import ProductCard from '@/app/components/ProductCard';
import { ProductsData } from '@/app/lib/Data';

/**
 * ProductsCardsRows: grid of product cards with entrance animations.
 */
export default function ProductsCardsRows() {
    return (
        <section
            role="list"
            className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-4 max-md:gap-6"
        >
            {ProductsData.map((card, idx) => (
                <GoTopAnimation key={idx} idx={idx + 1} startNumber={0}>
                    <div role="listitem">
                        <ProductCard
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            backgroundColor={card.backgroundColor}
                        />
                    </div>
                </GoTopAnimation>
            ))}
        </section>
    );
}
