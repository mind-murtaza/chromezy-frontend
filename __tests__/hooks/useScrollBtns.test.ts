import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollBtns } from '@/app/hooks/useScrollBtns';
import type { CommentsController } from '@/app/Types/ControllerType';
import { animationControls } from 'motion/react';

// Mock motion controls
const mockControls = {
    start: vi.fn(),
    stop: vi.fn(),
    set: vi.fn(),
    subscribe: vi.fn(),
    mount: vi.fn(),
} as unknown as ReturnType<typeof animationControls>;

describe('useScrollBtns', () => {
    let mockController: CommentsController;

    beforeEach(() => {
        vi.clearAllMocks();

        // Mock DOM elements
        const mockRef = {
            current: {
                childElementCount: 5,
            } as HTMLDivElement,
        };

        const mockCommentRef = {
            current: {
                offsetWidth: 300,
            } as HTMLDivElement,
        };

        mockController = {
            ref: mockRef,
            commentRef: mockCommentRef,
            controls: mockControls,
        };

        // Mock window.innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1200,
        });
    });

    it('initializes with default values', () => {
        const { result } = renderHook(() => useScrollBtns(mockController));

        expect(result.current.handleClickNext).toBeDefined();
        expect(result.current.handleClickPrev).toBeDefined();
        expect(mockControls.start).toHaveBeenCalledWith({ left: 0 });
    });

    it('handles next click correctly', () => {
        const { result } = renderHook(() => useScrollBtns(mockController));

        act(() => {
            result.current.handleClickNext();
        });

        // Should move by width + gap (300 + 32 = 332)
        expect(mockControls.start).toHaveBeenCalledWith({ left: -332 });
    });

    it('handles prev click correctly', () => {
        const { result } = renderHook(() => useScrollBtns(mockController));

        // First move next, then prev
        act(() => {
            result.current.handleClickNext();
        });

        act(() => {
            result.current.handleClickPrev();
        });

        expect(mockControls.start).toHaveBeenCalledWith({ left: 0 });
    });

    it('prevents going beyond bounds on next', () => {
        // Mock fewer visible items
        Object.defineProperty(window, 'innerWidth', {
            value: 600, // Only 2 items visible (600/300 = 2)
        });

        const { result } = renderHook(() => useScrollBtns(mockController));

        // Try to go beyond available items (5 total - 2 visible = 3 max moves)
        act(() => {
            result.current.handleClickNext(); // count = 1
        });
        act(() => {
            result.current.handleClickNext(); // count = 2
        });
        act(() => {
            result.current.handleClickNext(); // count = 3
        });
        act(() => {
            result.current.handleClickNext(); // Should not increment further
        });

        // Should have called start 4 times (initial + 3 moves)
        expect(mockControls.start).toHaveBeenCalledTimes(4);
    });

    it('prevents going below zero on prev', () => {
        const { result } = renderHook(() => useScrollBtns(mockController));

        act(() => {
            result.current.handleClickPrev();
        });

        // Should only have initial call, no additional prev movement
        expect(mockControls.start).toHaveBeenCalledTimes(1);
        expect(mockControls.start).toHaveBeenCalledWith({ left: 0 });
    });

    it('handles null refs gracefully', () => {
        const nullController: CommentsController = {
            ref: { current: null },
            commentRef: { current: null },
            controls: mockControls,
        };

        const { result } = renderHook(() => useScrollBtns(nullController));

        act(() => {
            result.current.handleClickNext();
        });

        // Should handle null refs without crashing
        expect(mockControls.start).toHaveBeenCalled();
    });

    it('resets swipe on mount', () => {
        renderHook(() => useScrollBtns(mockController));

        expect(mockControls.start).toHaveBeenCalledWith({ left: 0 });
    });
});
