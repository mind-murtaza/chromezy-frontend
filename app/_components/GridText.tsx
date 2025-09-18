import React from 'react';

/**
 * GridText: gradient-styled number/text for metric displays.
 */
export default function GridText({ children }: { children: React.ReactNode }) {
    return (
        <>
            <p
                className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent"
                style={{
                    backgroundClip: 'text',
                    MozBackgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'rgba(255, 255, 255, 0)',
                }}
                aria-hidden
            >
                {children}
            </p>
        </>
    );
}
