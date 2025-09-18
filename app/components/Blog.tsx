import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

type StoryProps = {
    title: string;
    description: string;
    image: React.ReactElement;
};

/**
 * Blog: card showing a featured success story with image, title and description.
 */
export default function Blog({ title, description, image }: StoryProps) {
    return (
        <article role="listitem" className="relative h-[304px] overflow-hidden rounded-[20px]">
            {image}
            <p className="absolute left-[14px] top-4 flex h-6 w-[106px] items-center justify-center text-nowrap rounded-[100px] border border-[#fff] bg-[#ffffffcc] px-3 py-0.5 text-[10px] font-semibold text-[#141517] max-sm:p-0">
                Success Stories
            </p>
            <button
                type="button"
                aria-label="Open story"
                className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[100px] bg-[#00000099]"
            >
                <FiArrowUpRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-0 h-20 w-[95%] rounded-tr-[20px] bg-white p-4 text-[#141517]">
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-[10px]">{description}</p>
            </div>
        </article>
    );
}
