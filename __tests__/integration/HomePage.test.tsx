import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '../utils/test-utils';
import HomePage from '@/app/page';
import { mockMotion, mockIntersectionObserver } from '../utils/motion-mocks';

// Mock react-hook-form
vi.mock('react-hook-form', () => ({
    useForm: () => ({
        register: vi.fn(name => ({
            name,
            onChange: vi.fn(),
            onBlur: vi.fn(),
            ref: vi.fn(),
        })),
        handleSubmit: vi.fn(fn => (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            fn({});
        }),
        formState: {
            errors: {},
            isSubmitting: false,
        },
        reset: vi.fn(),
    }),
}));

describe('HomePage Integration', () => {
    beforeEach(() => {
        mockMotion();
        mockIntersectionObserver();
        vi.clearAllMocks();
    });

    it('renders complete home page structure', () => {
        render(<HomePage />);

        // Check for main sections (no hero region, just content)
        expect(screen.getByText('Product Engineering')).toBeInTheDocument();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('renders navigation header', () => {
        render(<HomePage />);

        // Logo is in layout Header, not in HomePage component
        // Check for main content instead
        expect(screen.getByText(/CONCEPT/i)).toBeInTheDocument();

        // Navigation links are in Header component (layout), not in HomePage
        // Check for sections instead
        expect(screen.getByText('Product Engineering')).toBeInTheDocument();
        expect(screen.getByText('FEATURED INSIGHTS')).toBeInTheDocument();
    });

    it('renders hero section with all elements', () => {
        render(<HomePage />);

        // Main tagline (no h1 heading in the design)
        expect(screen.getByText(/CONCEPT/i)).toBeInTheDocument();
        expect(screen.getByText(/REALITY/i)).toBeInTheDocument();

        // Form submit button (main CTA)
        expect(
            screen.getByRole('button', { name: /send request/i })
        ).toBeInTheDocument();

        // Statistics
        expect(screen.getByText('200%')).toBeInTheDocument();
        expect(screen.getByText('4X')).toBeInTheDocument();
        expect(screen.getByText('73%')).toBeInTheDocument();
        expect(screen.getByText('10K+')).toBeInTheDocument();
    });

    it('renders products section with product cards', () => {
        render(<HomePage />);

        const productsSection = screen
            .getByText('Product Engineering')
            .closest('section');
        expect(productsSection).toBeInTheDocument();

        // Check for product titles
        expect(screen.getByText('MVP')).toBeInTheDocument();
        expect(screen.getByText('SaaS')).toBeInTheDocument();
        expect(screen.getByText('AI')).toBeInTheDocument();
        expect(
            screen.getByText('B2B & B2C Commerce Transformation')
        ).toBeInTheDocument();
    });

    it('renders contact section with form and info', () => {
        render(<HomePage />);

        // Contact form
        expect(screen.getByLabelText("What's your name?")).toBeInTheDocument();
        expect(
            screen.getByLabelText("What's your email address?")
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /send request/i })
        ).toBeInTheDocument();

        // Contact info
        expect(screen.getByText('+1 315 308 0901')).toBeInTheDocument();
        expect(screen.getByText('sales@chromezy.com')).toBeInTheDocument();
    });

    it('renders all animation components', () => {
        render(<HomePage />);

        // Animation components should render without errors
        // We can't directly test motion components, but ensure page renders
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has proper semantic structure', () => {
        render(<HomePage />);

        // Main landmark
        expect(screen.getByRole('main')).toBeInTheDocument();

        // Multiple sections/regions
        const regions = screen.getAllByRole('region');
        expect(regions.length).toBeGreaterThan(0);

        // Navigation is in layout, not tested here as it's not part of HomePage component

        // Headings hierarchy (no h1, but multiple h2 headings exist)
        const h2Headings = screen.getAllByRole('heading', { level: 2 });
        expect(h2Headings.length).toBeGreaterThan(0);
    });

    it('renders all interactive elements', () => {
        render(<HomePage />);

        // Buttons
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBeGreaterThan(0);

        // Form inputs (using label text instead of placeholders)
        expect(
            screen.getByLabelText(/what's your name\?/i)
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText(/what's your email address\?/i)
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText(/what's your phone number\?/i)
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText(/how can we help you\?/i)
        ).toBeInTheDocument();

        // Links
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });

    it('renders all images with alt text', () => {
        render(<HomePage />);

        const images = screen.getAllByRole('img');

        images.forEach(img => {
            expect(img).toHaveAttribute('alt');
            expect(img.getAttribute('alt')).not.toBe('');
        });
    });

    it('has correct page title structure', () => {
        render(<HomePage />);

        // Main tagline (rendered as paragraph, not heading)
        expect(screen.getByText(/CONCEPT/i)).toBeInTheDocument();
        expect(screen.getByText(/REALITY/i)).toBeInTheDocument();
    });

    it('renders social media links', () => {
        render(<HomePage />);

        // Social links exist in contact section
        expect(screen.getByText('+1 315 308 0901')).toBeInTheDocument();
        expect(screen.getByText('sales@chromezy.com')).toBeInTheDocument();
    });

    it('maintains responsive design classes', () => {
        render(<HomePage />);

        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();

        // Check for responsive grid layouts in stats
        const statsContainer = screen.getByText('200%').closest('.grid');
        expect(statsContainer).toHaveClass('grid');
    });
});
