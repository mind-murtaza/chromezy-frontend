'use client';
import { FiArrowUpRight } from 'react-icons/fi';

export interface ProductCardProps {
    image: React.ReactElement;
    title: string;
    description: string;
    backgroundColor: string;
}

/**
 * ProductCard: displays service/product details with image and cta.
 */
export default function ProductCard({
    title,
    description,
    backgroundColor,
    image,
}: ProductCardProps) {
    return (
        <article
            className="relative h-[436px] gap-4 rounded-xl px-5 py-8"
            style={{ backgroundColor }}
        >
            {image}
            <span className="flex h-8 w-[97px] items-center justify-center rounded-[50px] border border-[#ffffff1a] bg-[#ffffff0d] text-[10px]">
                Our Services
            </span>
            <div className="mt-[48px] flex min-h-[292px] flex-col justify-between">
                <div className="space-y-4">
                    <h3 className="w-[80%] text-2xl font-semibold leading-[26px]">
                        {title}
                    </h3>
                    <p className="font-inter text-sm font-medium text-[#ffffffcc]">
                        {description}
                    </p>
                </div>
                <a
                    href="#"
                    className="mx-auto flex h-14 w-full items-center justify-center gap-2 rounded-[80px] bg-black px-2 py-3 text-xs"
                >
                    <span>Talk to a Product Expert</span>
                    <FiArrowUpRight className="h-4 w-4" />
                </a>
            </div>
        </article>
    );
}
