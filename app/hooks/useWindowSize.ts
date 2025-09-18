import { useState, useEffect } from 'react';

/**
 * Tracks and returns the current window width.
 */
export function useWindowWidth(): number {
    const [width, setWidth] = useState<number>(
        typeof window === 'undefined' ? 0 : window.innerWidth
    );

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}
