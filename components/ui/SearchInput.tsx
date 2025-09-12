'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchInputProps {
    className?: string;
    placeholder?: string;
    onSearch?: (query: string) => void;
}

export function SearchInput({
    className,
    placeholder = 'Search',
    onSearch,
}: SearchInputProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch?.(query.trim());
        }
    };

    const handleClear = () => {
        setQuery('');
    };

    return (
        <div className={cn('relative', className)}>
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className="w-48 rounded-full border-0 bg-transparent py-2 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
