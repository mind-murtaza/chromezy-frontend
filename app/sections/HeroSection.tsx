'use client';
import BackgroundHeroSection from '../components/BackgroundHeroSection';
import HiddenTopAnimation from '../components/HiddenTopAnimation';
import Introduction from '../components/Introduction';
import { SCROLL_DISTANCES, BREAKPOINTS } from '@/app/lib/constants';

/**
 * HeroSection: main landing section with animated background and introduction.
 * Uses centralized constants for maintainable scroll triggers and breakpoints.
 */
export default function HeroSection() {
    return (
        <HiddenTopAnimation
            distance={SCROLL_DISTANCES.HERO_HIDDEN}
            maxScreen={BREAKPOINTS.SM}
        >
            <BackgroundHeroSection />
            <Introduction />
        </HiddenTopAnimation>
    );
}
