/**
 * Application constants - centralized configuration for magic numbers,
 * animation values, breakpoints, and other static values.
 *
 * Organized by domain for better maintainability.
 */

// ===== SCROLL ANIMATION CONSTANTS =====

/** Scroll ranges and values for ball animation */
export const SCROLL_BALL = {
    RANGES: [0, 731, 1123, 1887, 2651, 3515, 4500, 5200] as number[],
    TOP_VALUES: [98, 1130, 1250, 1730, 2640, 3550, 4970, 5400] as number[],
    RIGHT_VALUES: [-20, 200, -17, 97, -17, -17, 545, 780] as number[],
    SIZE_VALUES: [350, 350, 669, 418, 639, 639, 350, 350] as number[],
    BLUR_VALUES: [0, 0, 0, 10, 15, 40, 10, 35] as number[],
    OPACITY_VALUES: [1, 1, 1, 1, 1, 0.25, 1, 0.6] as number[],
};

/** Scroll ranges and values for triangle animation */
export const SCROLL_TRIANGLE = {
    RANGES: [0, 731, 1123, 1887, 2651, 3515] as number[],
    TOP_VALUES: [138, 843, 1300, 2200, 2640, 3400] as number[],
    LEFT_VALUES: [-390, -130, -45, -115, -450, -450] as number[],
    SIZE_VALUES: [669, 409, 191, 434, 816, 816] as number[],
    BLUR_VALUES: [10, 5, 14, 7, 14, 14] as number[],
    OPACITY_VALUES: [1, 1, 1, 1, 1, 0] as number[],
};

/** Scroll ranges and values for white ball animation */
export const SCROLL_WHITE_BALL = {
    RANGES: [2651, 3515, 4180, 4810] as number[],
    TOP_VALUES: [4200, 3700, 4155, 4635] as number[],
    LEFT_VALUES: [-100, -285, -690, -20] as number[],
    SIZE_VALUES: [300, 650, 960, 340] as number[],
    ROTATE_VALUES: [0, 90, -2, 90] as number[],
};

/** Blur ball animation values */
export const BLUR_BALL = {
    SCROLL_RANGE: [751, 1123] as [number, number],
    TOP_RANGE: [0, -750] as [number, number],
    SCALE_RANGE: [1, 0.2] as [number, number],
};

/** Introduction section animation values */
export const INTRODUCTION = {
    SCROLL_RANGE: [0, 650] as [number, number],
    GAP_RANGE: [48, 0] as [number, number],
};

/** Services list animation values */
export const SERVICES_LIST = {
    SCROLL_RANGE: [3500, 4250] as [number, number],
    GAP_RANGE: [40, 0] as [number, number],
};

/** Side slogan animation values */
export const SIDE_SLOGAN = {
    SCROLL_RANGE: [3500, 4250] as [number, number],
    HEIGHT_RANGE: [859, 550] as [number, number],
    OPACITY_RANGE: [1, 0.35] as [number, number],
    PADDING_RANGE: [120, 10] as [number, number],
};

/** Contact form animation values */
export const CONTACT_FORM = {
    SCROLL_RANGES: {
        POSITION: [4550, 4750] as [number, number],
        MAIL_SIZE: [4550, 4750] as [number, number],
        OPACITY: [4550, 4760] as [number, number],
        OVERFLOW: [4750, 4752] as [number, number],
    },
    VALUES: {
        TOP: [-90, -35] as [number, number],
        RIGHT: [-18, -42] as [number, number],
        MAIL_HEIGHT: [130, 90] as [number, number],
        MAIL_WIDTH: [167, 125] as [number, number],
        BG_COLOR: ['#AACFFE', '#DBEBFF'] as [string, string],
        OPACITY_STATES: {
            INITIAL: [1, 0.5] as [number, number],
            FINAL: [0.5, 1] as [number, number],
        },
    },
};

/** Contact character animation values */
export const CONTACT_CHARACTER = {
    SCROLL_RANGE: [4600, 4800] as [number, number],
    SIZE_RANGE: ['max(120px,8vw)', 'max(120px,20.85vw)'] as [string, string],
    OPACITY_RANGE: [0.3, 1] as [number, number],
    TOP_RANGE: [180, 0] as [number, number],
};

/** Contact info container animation */
export const CONTACT_INFO = {
    SCROLL_RANGE: [4550, 4750] as [number, number],
    HEIGHT_RANGE: [651, 760] as [number, number],
};

// ===== BREAKPOINTS AND RESPONSIVE =====

export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
} as const;

export const ANIMATION_BREAKPOINTS = {
    SERVICES_ANIMATION: 1300,
    SIDE_SLOGAN: 1280,
} as const;

// ===== INTERSECTION OBSERVER CONFIG =====

export const INTERSECTION_CONFIG = {
    SCROLL_SPY_THRESHOLD: 0.7,
    VIEWPORT_AMOUNTS: {
        LARGE: 0.45,
        SMALL: 0,
        DEFAULT: 0.15,
    },
    SCROLL_THRESHOLD: 100, // pixels from top to consider "Home"
} as const;

// ===== ANIMATION DURATIONS AND DELAYS =====

export const ANIMATION_TIMING = {
    DURATIONS: {
        FAST: 0.35,
        MEDIUM: 0.4,
        SLOW: 0.6,
    },
    DELAYS: {
        SHORT: 0.1,
        MEDIUM: 0.3,
        LONG: 0.5,
    },
    EASING: {
        LINEAR: 'linear',
        EASE_OUT: 'easeOut',
        EASE_IN_OUT: 'easeInOut',
    },
} as const;

// ===== CAROUSEL/SWIPE CONFIG =====

export const CAROUSEL = {
    SWIPE_THRESHOLD: 60, // pixels
    GAP_SIZE: 32, // gap between carousel items
} as const;

// ===== Z-INDEX LAYERS =====

export const Z_INDEX = {
    BACKGROUND: -200,
    BEHIND: -2,
    BACK: -1,
    BASE: 0,
    ELEVATED: 10,
    MODAL: 100,
    HEADER: 2000,
} as const;

// ===== FORM VALIDATION =====

export const FORM_CONFIG = {
    MODES: {
        ON_SUBMIT: 'onSubmit' as const,
        ON_CHANGE: 'onChange' as const,
        ON_BLUR: 'onBlur' as const,
        ON_TOUCHED: 'onTouched' as const,
        ALL: 'all' as const,
    },
    MESSAGES: {
        REQUIRED: 'This Field Is Required',
    },
} as const;

// ===== IMAGE SIZES =====

export const IMAGE_SIZES = {
    LOGO: {
        WIDTH: 128,
        HEIGHT: 26,
        MOBILE_WIDTH: 100,
        MOBILE_HEIGHT: 20,
    },
    ICONS: {
        SMALL: 16,
        MEDIUM: 20,
        LARGE: 24,
    },
} as const;

// ===== CONTACT INFORMATION =====

export const CONTACT_INFO_DATA = {
    PHONE: '+1 315 308 0901',
    EMAIL: 'sales@chromezy.com',
    SOCIAL_URLS: {
        FACEBOOK: 'https://www.facebook.com/MindfireSolutions',
        INSTAGRAM: 'https://www.instagram.com/mindfiresolutions/',
        LINKEDIN: 'https://www.linkedin.com/company/mindfire-solutions/',
    },
} as const;

// ===== SCROLL TRIGGER DISTANCES =====

export const SCROLL_DISTANCES = {
    HERO_FADE: [0, 750] as [number, number],
    HERO_HIDDEN: [0, 650] as [number, number],
    PRODUCTS_HIDDEN: [1200, 1750] as [number, number],
    BLOGS_HIDDEN: [2655, 3350] as [number, number],
    VIOLET_LIGHT: {
        PRODUCTS: [700, 800] as [number, number],
        CONTACT: [5100, 5250] as [number, number],
    },
};

// ===== COMPONENT DIMENSIONS =====

export const DIMENSIONS = {
    HEADER_HEIGHT: 64, // 16 * 4 = 64px
    FOOTER_HEIGHT: 468,
    CARD_HEIGHTS: {
        PRODUCT: 436,
        BLOG: 304,
        CLIENT_COMMENT: 450,
        INSIGHT: 220, // image height in insight card
    },
    CAROUSEL_GAP: 32,
} as const;

// ===== COLOR VALUES =====

export const COLORS = {
    GRADIENTS: {
        PRIMARY: 'linear-gradient(to right, #11deff, #4380ff)',
        HERO_RADIAL:
            'radial-gradient(circle, #095dff 0%, #bd09ff3e 40%, #bd09ff00 80%)',
        VIOLET_LIGHT:
            'radial-gradient(circle, #095dff 0%, #bd09ff47 30%, #bd09ff00 80%)',
        TEXT_GRADIENT: 'linear-gradient(to right, #3C6BFE, #9D84F2)',
    },
    BRAND: {
        PRIMARY_BLUE: '#4380FF',
        ACCENT_CYAN: '#11DEFF',
        SUCCESS_GREEN: '#5FAD8C',
    },
} as const;

// ===== NAVIGATION ITEMS =====

export const NAVIGATION = {
    MAIN_LINKS: [
        'Home',
        'ExploreAI',
        'Services',
        'E-commerce',
        'Products',
        'Blogs',
    ],
    FOOTER_COMPANY: ['Home', 'About Us', 'Career', 'Case Study'],
    FOOTER_SERVICES: ['AI', 'MVP', 'SaaS', 'E-commerce'],
} as const;
