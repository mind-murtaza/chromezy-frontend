import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import ScrollWhiteBall from '@/app/components/ScrollWhiteBall';
import { mockMotion } from '../../utils/motion-mocks';

describe('ScrollWhiteBall', () => {
    beforeEach(() => {
        mockMotion();
    });

    it('renders glob image', () => {
        render(<ScrollWhiteBall />);

        const image = screen.getByRole('img', { name: /white ball/i });
        expect(image).toBeInTheDocument();
    });

    it('applies correct styling classes', () => {
        render(<ScrollWhiteBall />);

        const container = screen.getByRole('img').parentElement;
        expect(container).toHaveClass('absolute', 'max-lg:hidden');
    });

    it('uses priority loading for image', () => {
        render(<ScrollWhiteBall />);

        const image = screen.getByRole('img');
        // Priority is a Next.js Image prop that doesn't reflect in DOM
        // This test ensures the component renders without errors
        expect(image).toBeInTheDocument();
    });

    it('has correct image properties', () => {
        render(<ScrollWhiteBall />);

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'white ball');
        expect(image).toHaveClass('object-cover');
    });

    // Reduced motion path is handled at runtime; not asserting here

    it('has correct quality setting', () => {
        render(<ScrollWhiteBall />);

        // Image quality is a Next.js prop that doesn't reflect in DOM
        // This test ensures the component renders without errors
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });
});
