import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

type InsightCardProps = {
    image: string;
    title: string;
    description: string;
};

/**
 * InsightCard: displays an insight image with title and description.
 */
export default function InsightCard({
    image,
    title,
    description,
}: InsightCardProps) {
    return (
        <>
            <article
                className="space-y-3 rounded-[20px] bg-[#00000033] p-5 pb-8 backdrop-blur-[20px]"
                role="listitem"
            >
                <div className="relative mb-2 h-[220px] w-full overflow-hidden rounded-lg">
                    <Image
                        src={`/${image}`}
                        fill
                        alt={title}
                        className="object-cover"
                        priority
                        quality={100}
                    />
                </div>
                <div className="flex justify-between gap-4">
                    <h3 className="text-base font-semibold">{title}</h3>
                    <button
                        type="button"
                        aria-label="Open insight"
                        className="flex h-10 min-w-10 items-center justify-center rounded-[100px] bg-[#00000099]"
                    >
                        <FiArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
                <p className="text-sm text-[#ffffffb3]">{description}</p>
            </article>
        </>
    );
}
