import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import Navigation from '@/app/components/NavLinks';
import { mockIntersectionObserver } from '../../utils/motion-mocks';

describe('Navigation', () => {
    beforeEach(() => {
        mockIntersectionObserver();
    });

    it('renders all navigation links', () => {
        render(<Navigation />);

        const expectedLinks = [
            'Home',
            'Explore AI',
            'Services',
            'E-commerce',
            'Products',
            'Blogs',
        ];

        expectedLinks.forEach(linkText => {
            expect(screen.getByText(linkText)).toBeInTheDocument();
        });
    });

    it('renders navigation as a list', () => {
        render(<Navigation />);

        const nav = screen.getByRole('navigation', {
            name: /primary navigation/i,
        });
        const list = nav.querySelector('ul');
        const items = nav.querySelectorAll('li');

        expect(list).toBeInTheDocument();
        expect(items).toHaveLength(6); // 6 navigation items
    });

    it('has correct styling classes', () => {
        render(<Navigation />);

        const nav = screen.getByRole('navigation', {
            name: /primary navigation/i,
        });
        expect(nav).toHaveClass('align-center');
    });

    it('renders links with correct structure', () => {
        render(<Navigation />);

        const homeLink = screen.getByText('Home');
        expect(homeLink.tagName.toLowerCase()).toBe('a');

        const listItem = homeLink.closest('li');
        expect(listItem).toHaveClass('relative');
    });
});
