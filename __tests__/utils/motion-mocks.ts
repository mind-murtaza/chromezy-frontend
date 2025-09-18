import { vi } from 'vitest';

/**
 * Mock motion/react for testing
 */
export const mockMotion = () => {
    vi.mock('motion/react', () => ({
        motion: {
            div: 'div',
            section: 'section',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            p: 'p',
            button: 'button',
            form: 'form',
            input: 'input',
            textarea: 'textarea',
            nav: 'nav',
            ul: 'ul',
            li: 'li',
            a: 'a',
            img: 'img',
        },
        useScroll: () => ({
            scrollY: { get: () => 0 },
            scrollX: { get: () => 0 },
        }),
        useTransform: () => ({ get: () => 0 }),
        useReducedMotion: () => false,
        animationControls: () => ({
            start: vi.fn(),
            stop: vi.fn(),
            set: vi.fn(),
        }),
        useInView: () => false,
        AnimatePresence: ({ children }: { children: React.ReactNode }) =>
            children,
    }));
};

/**
 * Mock intersection observer
 */
export const mockIntersectionObserver = () => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
};
