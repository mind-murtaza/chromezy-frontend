// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { socialItems } from '@/app/_lib/Data';

/**
 * CopyWrites: footer bottom bar with copyright and social links.
 */
export default function CopyWrites() {
    return (
        <>
            <div className="mt-20 flex h-20 w-full items-center justify-between text-nowrap border-t border-[#ffffff0d] text-xs text-[#ffffff99] max-lg:h-auto max-lg:flex-col max-lg:justify-center max-lg:gap-5 max-md:mt-12 max-md:py-4 max-sm:mb-1">
                <div className="flex items-center gap-3 max-sm:flex-col">
                    <p>Copyright &copy; 2025</p>
                    <p className="max-sm:hidden">|</p>
                    <p>Chromezy, All Rights Reserved</p>
                    <p className="max-sm:hidden">|</p>
                    <p>
                        Designed by <u>Murtaza Lightwala (Mindfire Solutions)</u>
                    </p>
                </div>
                <nav aria-label="Social links" className="flex items-center gap-8">
                    <p>Connect with us:</p>
                    <div className="flex items-center gap-4">
                        {socialItems.map((item) => (
                            <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}
