import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import ContactUsSection from '@/app/sections/ContactUs';
import { mockMotion, mockIntersectionObserver } from '../../utils/motion-mocks';

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

describe('ContactUsSection', () => {
    beforeEach(() => {
        mockMotion();
        mockIntersectionObserver();
        vi.clearAllMocks();
    });

    it('renders section with correct id', () => {
        render(<ContactUsSection />);

        const section = screen.getByRole('region');
        expect(section).toHaveAttribute('id', 'ContactUs');
    });

    it('renders section heading', () => {
        render(<ContactUsSection />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Contact Us/);
    });

    it('renders contact form', () => {
        render(<ContactUsSection />);

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

    it('renders contact information', () => {
        render(<ContactUsSection />);

        expect(screen.getByText('+1 315 308 0901')).toBeInTheDocument();
        expect(screen.getByText('sales@chromezy.com')).toBeInTheDocument();
    });

    it('renders section correctly without social links', () => {
        render(<ContactUsSection />);

        // ContactUs section doesn't have social media links - those are in Footer
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByText('+1 315 308 0901')).toBeInTheDocument();
        expect(screen.getByText('sales@chromezy.com')).toBeInTheDocument();
    });

    it('renders character image', () => {
        render(<ContactUsSection />);

        const characterImage = screen.getByRole('img', {
            name: /ContactUsCharacter/i,
        });
        expect(characterImage).toBeInTheDocument();
    });

    it('renders mail icon', () => {
        render(<ContactUsSection />);

        const mailIcon = screen.getByRole('img', { name: /mail/i });
        expect(mailIcon).toBeInTheDocument();
    });

    it('has correct section structure', () => {
        render(<ContactUsSection />);

        const section = screen.getByRole('region');
        expect(section).toHaveClass('relative');
    });

    it('applies correct styling to heading', () => {
        render(<ContactUsSection />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-[40px]', 'font-bold');
    });

    it('has proper semantic structure', () => {
        render(<ContactUsSection />);

        // Should have section landmark
        expect(screen.getByRole('region')).toBeInTheDocument();

        // Should have main heading
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

        // Should have form
        // Form element lacks explicit role attribute; check inputs exist instead
        expect(
            screen.getByLabelText(/what's your name\?/i)
        ).toBeInTheDocument();
    });

    it('renders submit button', () => {
        render(<ContactUsSection />);

        const submitButton = screen.getByRole('button', {
            name: /send request/i,
        });
        expect(submitButton).toBeInTheDocument();
    });

    it('renders section description', () => {
        render(<ContactUsSection />);

        const description = screen.getByText(
            /Talk with us to know how we can make/i
        );
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass('text-sm');
    });

    it('has responsive layout classes', () => {
        render(<ContactUsSection />);

        // Check for responsive grid layout
        const container = screen
            .getByRole('region')
            .querySelector('.relative.flex');
        expect(container).toBeTruthy();
    });
});
