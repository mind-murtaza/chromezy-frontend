import React from 'react';
import Technology from './Technology';

export type ServiceItem = {
    text: string;
    icon?: React.ReactElement;
    iconColor?: string;
};

type TechnologyFieldProps = {
    title: string;
    Services: ServiceItem[];
    idx: number;
};

/**
 * ServicesField: renders a category title and its technology badges.
 */
export default function ServicesField({ title, Services, idx }: TechnologyFieldProps) {
    return (
        <>
            <div className="relative flex items-start gap-10">
                <p className="text-[40px] font-semibold leading-[29px] text-[#ffffff1a]">0{idx}</p>
                <div className="space-y-4">
                    <p className="text-xl font-semibold leading-[25px]">{title}</p>
                    <div role="list" className="flex flex-wrap items-center gap-1">
                        {Services.map((el, idx) => (
                            <div key={idx} role="listitem">
                                <Technology {...(el.icon && { icon: el.icon })} {...(el.iconColor && { iconColor: el.iconColor })} text={el.text} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
