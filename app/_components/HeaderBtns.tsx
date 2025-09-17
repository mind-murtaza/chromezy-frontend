'use client';
import Link from 'next/link';

/**
 * HeaderBtns: secondary navigation actions in header (About Us, Contact Us).
 */
export default function HeaderBtns({
    handleClickNav,
}: {
    handleClickNav: (nav: string) => void;
}) {
    return (
        <nav
            aria-label="Header actions"
            className="ml-auto flex items-center gap-8 max-lg:gap-4"
        >
            <Link href="#" className="text-xs font-medium">
                About Us
            </Link>
            <Link
                href="/#ContactUS"
                className="w-[115px] cursor-pointer rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium text-white max-lg:w-fit max-lg:px-2.5 max-lg:text-xs"
                onClick={() => handleClickNav('ContactUS')}
            >
                Contact Us
            </Link>
        </nav>
    );
}
