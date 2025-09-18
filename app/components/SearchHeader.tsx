import React from 'react';
import { FiSearch } from 'react-icons/fi';

/**
 * SearchHeader: displays a search input in the header for desktop view.
 */
export default function SearchHeader() {
    return (
        <div
            role="search"
            className="flex h-full items-center gap-2 max-sm:hidden"
        >
            <FiSearch className="min-h-4 min-w-4 text-white" />
            <input
                type="search"
                aria-label="Site search"
                placeholder="Search"
                className="h-full w-full bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-[rgb(255,255,255,60%)] max-[1140px]:hidden"
            />
        </div>
    );
}
