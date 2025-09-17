"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import Logo from '@/app/_components/Logo';
import { socialItems } from '@/app/_lib/Data';
/**
 * SideNavLinks: mobile navigation with swipe gestures and social links.
 */
export default function SideNavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const navItems = [
    { id: 'Home', label: 'Home' },
    { id: 'ExploreAI', label: 'Explore AI' },
    { id: 'Services', label: 'Services' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Products', label: 'Products' },
    { id: 'Blogs', label: 'Blogs' },
  ];

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflowY = 'auto'; };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { touchStartX.current = e.touches[0]?.clientX ?? 0; };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => { touchEndX.current = e.touches[0]?.clientX ?? 0; };
  const onTouchEnd = () => { if (touchStartX.current - touchEndX.current > 60) setIsOpen(false); };

  return (
    <nav aria-label="Mobile menu">
      <FaBars className="hidden w-6 max-sm:inline-block" onClick={() => setIsOpen(true)} />
      <div
        className="flying-menu fixed inset-y-0 left-0 z-[100] w-[92%] bg-[#00000033] transition-transform"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 bg-[#1a1f32] p-6">
          <div className="flex items-center justify-between">
            {/* Logo already links to home */}
            <Logo />
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <IoCloseOutline className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="my-4 flex items-center gap-2 border-b border-[#ffffff6c] pr-4">
            <FiSearch className="text-[#ffffff99]" />
            <input type="search" placeholder="Search" className="w-full bg-transparent focus:outline-none" />
          </div>
          <ul className="mt-6 space-y-4 text-[#ffffff99] text-sm">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link href={`#${id}`} onClick={() => setIsOpen(false)} className="flex justify-between border-b border-[#ffffff0d] py-4">
                  <span>{label}</span>
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-6 flex gap-4">
            {socialItems.map(({ href, label, icon }) => (
              <Link key={label} href={href} target="_blank" aria-label={label}>
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

