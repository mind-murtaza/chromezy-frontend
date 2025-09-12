'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
}

export function Logo({
    className,
    width = 120,
    height = 40,
    priority = false,
}: LogoProps) {
    return (
        <Link
            href="/"
            className={cn('flex items-center', className)}
            aria-label="Chromezy - Home"
        >
            <Image
                src="/images/ui/logo.png"
                alt="Chromezy"
                width={width}
                height={height}
                priority={priority}
                className="h-auto"
            />
        </Link>
    );
}
