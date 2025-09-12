'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';
import { Navigation } from '@/components/ui/Navigation';
import { SearchInput } from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (query: string) => {
        // TODO: Implement search functionality
        console.log('Search query:', query);
    };

    return (
        <header
            className={cn(
                'fixed left-0 right-0 top-0 z-50 bg-black transition-all duration-300',
                isScrolled && 'border-b border-gray-800/50 shadow-lg',
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo
                            width={140}
                            height={45}
                            priority
                            className="transition-transform duration-200 hover:scale-105"
                        />
                    </div>

                    <div className="items-center space-x-4 hidden xl:flex px-4">
                        <SearchInput
                            placeholder="Search..."
                            onSearch={handleSearch}
                        />

                    </div>
                    {/* Desktop Navigation */}
                    <Navigation className="flex-1 justify-center" />

                    {/* Desktop Search + Buttons */}
                    <div className="hidden items-center space-x-4 xl:flex">
                        <Button
                            variant="ghost"
                            size="md"
                            className="text-white hover:bg-gray-800 hover:text-white"
                        >
                            About Us
                        </Button>

                        <Button
                            variant="primary"
                            size="md"
                            className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
