'use client';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import HeaderBtns from '@/app/components/HeaderBtns';
import { NAVIGATION, INTERSECTION_CONFIG } from '@/app/lib/constants';

/**
 * NavLinks: primary desktop navigation menu with scroll-spy functionality.
 * Uses centralized navigation constants for maintainable menu items.
 */
export default function NavLinks() {
    const [active, setActive] = useState<string>('Home');
    const links = useMemo(() => [...NAVIGATION.MAIN_LINKS], []);

    function handleClickNav(nav: string) {
        setActive(nav);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 0.7) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: INTERSECTION_CONFIG.SCROLL_SPY_THRESHOLD }
        );
        links.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        // reset to Home when scrolled to top
        function onScroll() {
            if (
                window.scrollY < INTERSECTION_CONFIG.SCROLL_THRESHOLD &&
                active !== 'Home'
            ) {
                setActive('Home');
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, [links, active]);

    return (
        <nav
            aria-label="Primary navigation"
            className="align-center flex h-full w-full justify-between"
        >
            <ul className="font-inter flex h-full items-center gap-8 border-b border-[#ffffff1a] px-4 text-xs font-medium max-[1140px]:gap-6 max-[870px]:gap-4 max-[810px]:gap-3 max-md:hidden max-sm:hidden">
                {links.map(item => (
                    <li
                        key={item}
                        className={`relative top-[1.5px] flex h-full items-center ${active === item ? 'active' : ''}`}
                        onClick={() => handleClickNav(item)}
                    >
                        <Link href={`#${item}`}>
                            {item.replace('AI', ' AI')}
                        </Link>
                    </li>
                ))}
            </ul>
            <HeaderBtns handleClickNav={handleClickNav} />
        </nav>
    );
}
