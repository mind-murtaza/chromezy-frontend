'use client';
import BackgroundHeroSection from '../_components/BackgroundHeroSection';
import HiddenTopAnimation from '../_components/HiddenTopAnimation';
import Introduction from '../_components/Introduction';
import { SCROLL_DISTANCES, BREAKPOINTS } from '@/app/_lib/constants';

/**
 * HeroSection: main landing section with animated background and introduction.
 * Uses centralized constants for maintainable scroll triggers and breakpoints.
 */
export default function HeroSection() {
    return (
        <HiddenTopAnimation distance={SCROLL_DISTANCES.HERO_HIDDEN} maxScreen={BREAKPOINTS.SM}>
            <BackgroundHeroSection />
            <Introduction />
        </HiddenTopAnimation>
    );
}
