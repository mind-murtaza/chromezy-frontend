'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
    label: string;
    href: string;
    isActive?: boolean;
}

interface NavigationProps {
    className?: string;
}

const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Explore AI', href: '/explore-ai' },
    { label: 'Services', href: '/services' },
    { label: 'E-commerce', href: '/e-commerce' },
    { label: 'Products', href: '/products' },
    { label: 'Blogs', href: '/blogs' },
];

export function Navigation({ className }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav
                className={cn(
                    'hidden items-center space-x-8 xl:flex',
                    className
                )}
            >
                {navigationItems.map(item => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'relative truncate py-2 text-sm font-medium transition-colors duration-200',
                                isActive
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                            )}
                        >
                            {item.label}
                            {/* Active indicator - blue underline */}
                            {isActive && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-500" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-300 transition-colors hover:text-white xl:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40 bg-black/50 xl:hidden"
                        onClick={closeMobileMenu}
                    />

                    {/* Mobile Menu */}
                    <div className="fixed right-0 top-0 z-50 h-full w-80 border-l border-gray-700 bg-gray-900 xl:hidden">
                        <div className="flex items-center justify-between border-b border-gray-700 p-6">
                            <span className="text-lg font-semibold text-white">
                                Menu
                            </span>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 text-gray-400 transition-colors hover:text-white"
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <nav className="p-6">
                            {/* Search in Mobile */}
                            <div className="mb-6">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <ul className="mb-6 space-y-4">
                                {navigationItems.map(item => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={cn(
                                                    'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200',
                                                    isActive
                                                        ? 'border-l-4 border-blue-500 bg-blue-500/10 text-blue-400'
                                                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Mobile Buttons */}
                            <div className="space-y-3 border-t border-gray-700 pt-6">
                                <Link
                                    href="/about"
                                    onClick={closeMobileMenu}
                                    className="block w-full rounded-lg px-4 py-3 text-center text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={closeMobileMenu}
                                    className="block w-full rounded-lg bg-blue-500 px-4 py-3 text-center text-white transition-all duration-200 hover:bg-blue-600"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
