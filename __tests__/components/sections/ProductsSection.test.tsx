import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import ProductsSection from '@/app/sections/Products';
import { mockMotion, mockIntersectionObserver } from '../../utils/motion-mocks';

describe('ProductsSection', () => {
    beforeEach(() => {
        mockMotion();
        mockIntersectionObserver();
    });

    it('renders section with correct id', () => {
        render(<ProductsSection />);

        const section = screen.getByRole('region');
        expect(section).toHaveAttribute('id', 'Products');
    });

    it('renders section header', () => {
        render(<ProductsSection />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Product Engineering');
    });

    it('renders product cards', () => {
        render(<ProductsSection />);

        // Check for service titles rendered as product cards
        expect(screen.getByText('MVP')).toBeInTheDocument();
        expect(screen.getByText('SaaS')).toBeInTheDocument();
        expect(screen.getByText('AI')).toBeInTheDocument();
        expect(
            screen.getByText('B2B & B2C Commerce Transformation')
        ).toBeInTheDocument();
    });

    it('renders product card images', () => {
        render(<ProductsSection />);

        const images = screen.getAllByRole('img');
        // Should have at least 4 product card images
        expect(images.length).toBeGreaterThanOrEqual(4);
    });

    it('renders product descriptions', () => {
        render(<ProductsSection />);

        expect(screen.getByText(/custom MVP development/i)).toBeInTheDocument();
    });

    it('has correct section structure', () => {
        render(<ProductsSection />);

        const section = screen.getByRole('region');
        expect(section).toHaveClass('relative');
    });

    it('renders products in a grid layout', () => {
        render(<ProductsSection />);

        // Find the container with product cards
        const productGrid = screen
            .getByText('MVP')
            .closest('section[role="list"]');
        expect(productGrid).toHaveClass('grid');
    });

    it('applies correct styling to section header', () => {
        render(<ProductsSection />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-nowrap', 'font-semibold');
    });

    it('has proper semantic structure', () => {
        render(<ProductsSection />);

        // Should have section landmark
        expect(screen.getByRole('region')).toBeInTheDocument();

        // Should have main heading
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('renders all product data correctly', () => {
        render(<ProductsSection />);

        // Check that all service titles are rendered
        const serviceTitles = [
            'MVP',
            'SaaS',
            'AI',
            'B2B & B2C Commerce Transformation',
        ];

        serviceTitles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('renders section description', () => {
        render(<ProductsSection />);

        const description = screen.getByText(/bespoke digital solutions/i);
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass('text-[clamp(14px,3vw,16px)]');
    });
});
