import { Variants } from 'framer-motion';
import { prefersReducedMotion } from './utils';

/**
 * Animation configurations following Agent.md standards
 * - Respect prefers-reduced-motion
 * - Performance-optimized transforms
 * - Consistent easing and timing
 */

// Base animation settings
export const ANIMATION_SETTINGS = {
    duration: 0.6,
    ease: 'easeOut',
    stagger: 0.1,
    reducedMotionDuration: 0.01,
} as const;

// Easing curves
export const EASING = {
    smooth: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.6, 0.32, 1.6],
    sharp: [0.4, 0, 0.2, 1],
    gentle: [0.25, 0.46, 0.45, 0.94],
} as const;

/**
 * Get animation settings based on user preferences
 */
export function getAnimationSettings(
    override?: Partial<typeof ANIMATION_SETTINGS>
) {
    const shouldReduceMotion = prefersReducedMotion();

    return {
        ...ANIMATION_SETTINGS,
        ...override,
        duration: shouldReduceMotion
            ? ANIMATION_SETTINGS.reducedMotionDuration
            : override?.duration || ANIMATION_SETTINGS.duration,
        stagger: shouldReduceMotion
            ? 0
            : override?.stagger || ANIMATION_SETTINGS.stagger,
    };
}

/**
 * Fade animations
 */
export const fadeVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.gentle,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

export const fadeUpVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

export const fadeDownVariants: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

/**
 * Slide animations
 */
export const slideLeftVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

export const slideRightVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

/**
 * Scale animations
 */
export const scaleVariants: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.bounce,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

export const scaleUpVariants: Variants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

/**
 * Stagger container variants
 */
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: getAnimationSettings().stagger,
            delayChildren: 0.1,
        },
    },
    exit: {
        transition: {
            staggerChildren: getAnimationSettings().stagger * 0.5,
            staggerDirection: -1,
        },
    },
};

export const staggerFast: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: getAnimationSettings().stagger * 0.5,
            delayChildren: 0.05,
        },
    },
};

export const staggerSlow: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: getAnimationSettings().stagger * 2,
            delayChildren: 0.2,
        },
    },
};

/**
 * Hover and interaction variants
 */
export const hoverScale = {
    scale: prefersReducedMotion() ? 1 : 1.05,
    transition: { duration: 0.2, ease: EASING.sharp },
};

export const hoverLift = {
    y: prefersReducedMotion() ? 0 : -5,
    transition: { duration: 0.3, ease: EASING.gentle },
};

export const tapScale = {
    scale: prefersReducedMotion() ? 1 : 0.95,
    transition: { duration: 0.1, ease: EASING.sharp },
};

/**
 * Page transition variants
 */
export const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: getAnimationSettings().duration * 0.5 },
    },
};

/**
 * Navigation variants
 */
export const navVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: EASING.smooth },
    },
};

export const mobileMenuVariants: Variants = {
    closed: { opacity: 0, height: 0 },
    open: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.4, ease: EASING.smooth },
    },
};

/**
 * Loading and skeleton variants
 */
export const pulseVariants: Variants = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
};

export const shimmerVariants: Variants = {
    initial: { x: '-100%' },
    animate: {
        x: '100%',
        transition: {
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
};

/**
 * Scroll-triggered animation utilities
 */
export const scrollVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: getAnimationSettings().duration,
            ease: EASING.smooth,
        },
    },
};

/**
 * Complex sequences for hero animations
 */
export const heroSequence: Variants = {
    initial: { opacity: 0, scale: 0.8, y: 60 },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: EASING.smooth,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

export const heroTextVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASING.smooth,
        },
    },
};

/**
 * Card reveal animations with performance optimization
 */
export const cardRevealVariants: Variants = {
    initial: {
        opacity: 0,
        rotateX: -15,
        y: 50,
        transformPerspective: 1000,
    },
    animate: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASING.smooth,
        },
    },
};

/**
 * Floating animation for glass orb and other elements
 */
export const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
};

/**
 * Export all variants as a collection
 */
export const motionVariants = {
    fade: fadeVariants,
    fadeUp: fadeUpVariants,
    fadeDown: fadeDownVariants,
    slideLeft: slideLeftVariants,
    slideRight: slideRightVariants,
    scale: scaleVariants,
    scaleUp: scaleUpVariants,
    page: pageVariants,
    nav: navVariants,
    mobileMenu: mobileMenuVariants,
    pulse: pulseVariants,
    shimmer: shimmerVariants,
    scroll: scrollVariants,
    hero: heroSequence,
    heroText: heroTextVariants,
    cardReveal: cardRevealVariants,
    floating: floatingVariants,
} as const;

export type MotionVariantType = keyof typeof motionVariants;
