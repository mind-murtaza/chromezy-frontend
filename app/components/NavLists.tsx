import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

/**
 * NavLists: footer quick navigation groups.
 */
export default function NavLists() {
    const groups: Array<{
        aria: string;
        items: string[];
        cta: { label: string; highlightClass: string };
    }> = [
        {
            aria: 'Company',
            items: ['Home', 'About Us', 'Career', 'Case Study'],
            cta: { label: 'Join the Team', highlightClass: 'text-white' },
        },
        {
            aria: 'Services',
            items: ['AI', 'MVP', 'SaaS', 'E-commerce'],
            cta: { label: 'Work with us', highlightClass: 'text-[#4380FF]' },
        },
    ];

    return (
        <nav
            aria-label="Footer navigation"
            className="font-inter flex h-fit w-[456px] justify-between gap-20 text-nowrap text-sm text-[#ffffff99] max-lg:gap-12 max-md:w-full max-md:justify-center max-sm:w-full max-sm:flex-col max-sm:gap-6"
        >
            {groups.map((group, groupIdx) => (
                <ul
                    key={groupIdx}
                    className="w-[max(160px,14.65vw)] max-sm:w-full"
                    aria-label={group.aria}
                >
                    {group.items.map((label, idx) => (
                        <li
                            key={idx}
                            className={`flex items-center justify-between ${idx < group.items.length - 0 ? 'border-b border-[#ffffff0d] py-4' : 'py-4'}`}
                        >
                            <button className="flex w-full items-center justify-between text-left">
                                <span>{label}</span>
                                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
                            </button>
                        </li>
                    ))}
                    <li className="mt-2 flex items-center justify-between py-2.5">
                        <p
                            className={`text-xl font-semibold ${group.cta.highlightClass}`}
                        >
                            {group.cta.label}
                        </p>
                        <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
                    </li>
                </ul>
            ))}
        </nav>
    );
}
