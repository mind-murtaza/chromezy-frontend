'use client';
import React from 'react';

export interface SectionHeaderProps {
    className: string;
    title: string;
    paragraph: string;
}

/**
 * SectionHeader: displays a title and subtitle for sections.
 */
export default function SectionHeader({
    className,
    title,
    paragraph,
}: SectionHeaderProps) {
    return (
        <header className={className}>
            <h2 className="text-nowrap text-[clamp(30px,5vw,40px)] font-semibold">
                {title}
            </h2>
            <p className="w-[60%] text-[clamp(14px,3vw,16px)] text-[#ffffffcc] max-md:w-[85%]">
                {paragraph}
            </p>
        </header>
    );
}
