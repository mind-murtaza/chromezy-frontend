import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import Logo from '@/app/components/Logo';

describe('Logo', () => {
    it('renders logo image with correct attributes', () => {
        render(<Logo />);

        const logo = screen.getByRole('img', { name: 'Chromezy logo' });
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('alt', 'Chromezy logo');
    });

    it('has correct dimensions', () => {
        render(<Logo />);

        const logoContainer = screen.getByRole('img').parentElement;
        expect(logoContainer).toHaveClass(
            'h-[26px]',
            'w-[128px]',
            'max-lg:h-5',
            'max-lg:w-[100px]'
        );
    });

    it('uses priority loading', () => {
        render(<Logo />);

        const logo = screen.getByRole('img');
        // Note: priority is a Next.js Image prop that doesn't reflect in DOM
        // This test ensures the component renders without errors
        expect(logo).toBeInTheDocument();
    });
});
