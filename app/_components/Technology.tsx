import React from 'react';

/**
 * Technology: pill badge with optional colored icon and label.
 */
type TechnologyProps = {
    icon?: React.ReactElement;
    text: string;
    iconColor?: string;
};

export default function Technology({ icon, text, iconColor }: TechnologyProps) {
    return (
        <>
            <div className="flex h-9 items-center gap-[6px] rounded-lg border border-[#1314161a] bg-[#ffffff1a] py-2 pl-3 pr-4">
                {icon && (
                    <span aria-hidden className="text-[20px] leading-none" style={iconColor ? { color: iconColor } : undefined}>
                        {icon}
                    </span>
                )}
                <p className="font-inter text-sm font-semibold">{text}</p>
            </div>
        </>
    );
}
