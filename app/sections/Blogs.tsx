import React from 'react';
import Blog from '@/app/components/Blog';
import GoTopAnimation from '@/app/components/GoTopAnimation';
import { BlogsData } from '@/app/lib/Data';
import HiddenTopAnimation from '@/app/components/HiddenTopAnimation';
import SectionHeader from '@/app/components/SectionHeader';
import { SCROLL_DISTANCES, ANIMATION_BREAKPOINTS } from '@/app/lib/constants';

/**
 * Blogs: featured insight stories grid.
 * Uses centralized constants for maintainable scroll triggers and breakpoints.
 */
export default function Blogs() {
    return (
        <HiddenTopAnimation distance={SCROLL_DISTANCES.BLOGS_HIDDEN} maxScreen={ANIMATION_BREAKPOINTS.SERVICES_ANIMATION}>
            <section
                className="grid scroll-mt-3 grid-cols-[repeat(auto-fill_,minmax(320px,1fr))] gap-10 p-20 max-md:px-6 max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))] max-sm:gap-6 max-sm:py-14"
                id="Blogs"
                aria-label="Success Stories"
            >
                <SectionHeader
                    className="max-h-[304px] space-y-4 py-10 max-sm:mb-4 max-sm:p-0"
                    title={'SUCCESS STORIES'}
                    paragraph={` Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.`}
                />
                <div role="list" className="contents">
                    {BlogsData.map((BlogData, idx) => (
                        <GoTopAnimation key={idx} idx={idx} startNumber={2}>
                            <Blog
                                title={BlogData.title}
                                description={BlogData.description}
                                image={BlogData.image}
                            />
                        </GoTopAnimation>
                    ))}
                </div>
            </section>
        </HiddenTopAnimation>
    );
}
