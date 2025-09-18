import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../../utils/test-utils';
import SearchInput from '@/app/components/SearchHeader';

describe('SearchInput', () => {
    it('renders search input with placeholder', () => {
        render(<SearchInput />);

        const input = screen.getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'search');
    });

    it('renders search icon', () => {
        render(<SearchInput />);

        // Icon is an SVG; assert visually by role container
        const container = screen.getByRole('search');
        expect(container.querySelector('svg')).toBeTruthy();
    });

    it('handles input changes', () => {
        render(<SearchInput />);

        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'test query' } });

        expect(input).toHaveValue('test query');
    });

    it('has correct styling', () => {
        render(<SearchInput />);

        const container = screen.getByRole('search');
        expect(container).toHaveClass('flex');

        const input = screen.getByPlaceholderText('Search');
        expect(input).toHaveClass('h-full', 'w-full');
    });

    it('positions search icon correctly', () => {
        render(<SearchInput />);

        const container = screen.getByRole('search');
        expect(container.querySelector('svg')).toBeTruthy();
    });
});
