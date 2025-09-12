'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant = 'primary', size = 'md', children, ...props },
        ref
    ) => {
        const baseStyles =
            'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary:
                'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
            secondary:
                'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500',
            ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
            outline:
                'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
