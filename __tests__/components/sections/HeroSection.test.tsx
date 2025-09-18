import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import HeroSection from '@/app/sections/HeroSection';
import { mockMotion, mockIntersectionObserver } from '../../utils/motion-mocks';

describe('HeroSection', () => {
    beforeEach(() => {
        mockMotion();
        mockIntersectionObserver();
    });

    it('renders hero content', () => {
        render(<HeroSection />);

        expect(
            screen.getByText(/Introducing AI Automation/i)
        ).toBeInTheDocument();
    });

    it('renders main tagline', () => {
        render(<HeroSection />);

        expect(screen.getByText(/CONCEPT/i)).toBeInTheDocument();
        expect(screen.getByText(/REALITY/i)).toBeInTheDocument();
    });

    it('renders magic wand icon', () => {
        render(<HeroSection />);

        const icon = screen.getByRole('img', { name: /magic wand icon/i });
        expect(icon).toBeInTheDocument();
        // Next.js optimizes images, so src will be different
        expect(icon.getAttribute('src')).toContain('magic-wand-icon.webp');
    });

    it('renders description text', () => {
        render(<HeroSection />);

        const description = screen.getByText(
            /We Engineer your Software Success/i
        );
        expect(description).toBeInTheDocument();
    });

    // No primary CTA button in current design

    it('renders statistics cards', () => {
        render(<HeroSection />);

        expect(screen.getByText('200%')).toBeInTheDocument();
        expect(screen.getByText('4X')).toBeInTheDocument();
        expect(screen.getByText('73%')).toBeInTheDocument();
        expect(screen.getByText('10K+')).toBeInTheDocument();
    });

    it('has correct section structure', () => {
        render(<HeroSection />);

        // Hero section doesn't have a region role - check for background visuals instead
        expect(
            screen.getByRole('img', { name: /flower/i })
        ).toBeInTheDocument();
    });

    it('renders background visuals', () => {
        render(<HeroSection />);
        expect(
            screen.getByRole('img', { name: /flower/i })
        ).toBeInTheDocument();
    });

    // Heading is rendered as a paragraph in current design

    it('applies correct styling to description', () => {
        render(<HeroSection />);

        const description = screen.getByText(
            /We Engineer your Software Success/i
        );
        expect(description).toHaveClass(
            'text-[clamp(16px,2vw,24px)]',
            'text-[#BDF4D0]'
        );
    });

    it('renders stats grid with correct layout', () => {
        render(<HeroSection />);

        const statsContainer = screen.getByText('200%').closest('.grid');
        expect(statsContainer).toHaveClass('grid');
    });

    // Semantic structure does not include heading role in current markup
});
