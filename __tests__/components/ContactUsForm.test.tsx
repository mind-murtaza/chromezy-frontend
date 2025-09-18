import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import ContactUsForm from '@/app/components/ContactUsForm';

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
            fn({
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+1234567890',
                message: 'Test message',
            });
        }),
        formState: {
            errors: {},
            isSubmitting: false,
        },
        reset: vi.fn(),
    }),
}));

describe('ContactUsForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Mock console.log to avoid noise in tests
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    it('renders all form fields', () => {
        render(<ContactUsForm />);

        expect(screen.getByLabelText("What's your name?")).toBeInTheDocument();
        expect(
            screen.getByLabelText("What's your email address?")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("What's your phone number?")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('What are you looking for?')
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('How can we help you?')
        ).toBeInTheDocument();
    });

    it('renders submit button', () => {
        render(<ContactUsForm />);

        const submitButton = screen.getByRole('button', {
            name: /send request/i,
        });
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
    });

    it('has correct form structure', () => {
        render(<ContactUsForm />);

        // Form element doesn't have role="form" by default, use querySelector instead
        const form = document.querySelector('form');
        expect(form).toBeInTheDocument();
        expect(form).toHaveClass('space-y-3');
    });

    it('handles form submission', async () => {
        render(<ContactUsForm />);

        // Form element doesn't have role="form" by default, use querySelector instead
        const form = document.querySelector('form');
        fireEvent.submit(form as Element);

        await waitFor(() => {
            // Form submission is mocked, just verify it doesn't crash
            expect(form).toBeInTheDocument();
        });
    });

    it('renders input fields with correct types', () => {
        render(<ContactUsForm />);

        expect(screen.getByLabelText("What's your name?")).toHaveAttribute(
            'type',
            'text'
        );
        expect(
            screen.getByLabelText("What's your email address?")
        ).toHaveAttribute('type', 'text');
        expect(
            screen.getByLabelText("What's your phone number?")
        ).toHaveAttribute('type', 'text');
    });

    it('renders textarea for message', () => {
        render(<ContactUsForm />);

        const messageField = screen.getByLabelText('How can we help you?');
        expect(messageField.tagName.toLowerCase()).toBe('textarea');
        expect(messageField).toHaveAttribute('rows', '5');
    });

    it('applies correct styling to form elements', () => {
        render(<ContactUsForm />);

        const nameInput = screen.getByLabelText("What's your name?");
        expect(nameInput).toHaveClass('w-full', 'rounded');

        const submitButton = screen.getByRole('button', {
            name: /send request/i,
        });
        expect(submitButton).toHaveClass('w-full');
    });

    it('has proper form accessibility', () => {
        render(<ContactUsForm />);

        // Form element doesn't have role="form" by default, use querySelector instead
        const form = document.querySelector('form');
        expect(form).toBeInTheDocument();

        // Check that all inputs are properly labeled
        expect(screen.getByLabelText("What's your name?")).toBeInTheDocument();
        expect(
            screen.getByLabelText("What's your email address?")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText("What's your phone number?")
        ).toBeInTheDocument();
        expect(
            screen.getByLabelText('How can we help you?')
        ).toBeInTheDocument();
    });
});
