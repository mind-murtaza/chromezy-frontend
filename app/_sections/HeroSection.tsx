"use client";
import BackgroundHeroSection from '../_components/BackgroundHeroSection';
import HiddenTopAnimation from '../_components/HiddenTopAnimation';
import Introduction from '../_components/Introduction';

export default function HeroSection() {
    return (
        <HiddenTopAnimation distance={[0, 650]} maxScreen={640}>
            <BackgroundHeroSection />
            <Introduction />
        </HiddenTopAnimation>
    );
}
