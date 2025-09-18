import React from 'react';
import SideSlogan from '@/app/_components/SideSlogan';
import ServicesList from '@/app/_components/ServicesList';

/**
 * Services: section containing category list and side slogan.
 */
export default function Services() {
    return (
        <section
            className="flex scroll-mt-10 flex-wrap items-center gap-20 px-20 py-[60px] max-[1050px]:gap-10 max-lg:gap-20 max-md:px-6 max-sm:py-14"
            id="Services"
            aria-label="Services"
        >
            <SideSlogan />
            <ServicesList />
        </section>
    );
}
