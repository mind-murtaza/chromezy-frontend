import { describe, it, expect } from 'vitest';
import {
    SCROLL_BALL,
    BLUR_BALL,
    INTRODUCTION,
    SERVICES_LIST,
    BREAKPOINTS,
    Z_INDEX,
    FORM_CONFIG,
    IMAGE_SIZES,
    COLORS,
    CONTACT_INFO_DATA,
    NAVIGATION,
    CAROUSEL,
    INTERSECTION_CONFIG,
} from '@/app/lib/constants';

describe('Constants', () => {
    describe('SCROLL_BALL', () => {
        it('has consistent array lengths', () => {
            const length = SCROLL_BALL.RANGES.length;
            expect(SCROLL_BALL.TOP_VALUES).toHaveLength(length);
            expect(SCROLL_BALL.RIGHT_VALUES).toHaveLength(length);
            expect(SCROLL_BALL.SIZE_VALUES).toHaveLength(length);
            expect(SCROLL_BALL.BLUR_VALUES).toHaveLength(length);
            expect(SCROLL_BALL.OPACITY_VALUES).toHaveLength(length);
        });

        it('has ascending scroll ranges', () => {
            for (let i = 1; i < SCROLL_BALL.RANGES.length; i++) {
                const current = SCROLL_BALL.RANGES[i]!;
                const prev = SCROLL_BALL.RANGES[i - 1]!;
                expect(current).toBeGreaterThan(prev);
            }
        });

        it('has valid opacity values', () => {
            SCROLL_BALL.OPACITY_VALUES.forEach(opacity => {
                expect(opacity).toBeGreaterThanOrEqual(0);
                expect(opacity).toBeLessThanOrEqual(1);
            });
        });
    });

    describe('BREAKPOINTS', () => {
        it('has ascending breakpoint values', () => {
            expect(BREAKPOINTS.SM).toBeLessThan(BREAKPOINTS.MD);
            expect(BREAKPOINTS.MD).toBeLessThan(BREAKPOINTS.LG);
            expect(BREAKPOINTS.LG).toBeLessThan(BREAKPOINTS.XL);
            expect(BREAKPOINTS.XL).toBeLessThan(BREAKPOINTS.XXL);
        });

        it('matches Tailwind default breakpoints', () => {
            expect(BREAKPOINTS.SM).toBe(640);
            expect(BREAKPOINTS.MD).toBe(768);
            expect(BREAKPOINTS.LG).toBe(1024);
            expect(BREAKPOINTS.XL).toBe(1280);
            expect(BREAKPOINTS.XXL).toBe(1536);
        });
    });

    describe('Z_INDEX', () => {
        it('has logical layering order', () => {
            expect(Z_INDEX.BACKGROUND).toBeLessThan(Z_INDEX.BEHIND);
            expect(Z_INDEX.BEHIND).toBeLessThan(Z_INDEX.BACK);
            expect(Z_INDEX.BACK).toBeLessThan(Z_INDEX.BASE);
            expect(Z_INDEX.BASE).toBeLessThan(Z_INDEX.ELEVATED);
            expect(Z_INDEX.ELEVATED).toBeLessThan(Z_INDEX.MODAL);
            expect(Z_INDEX.MODAL).toBeLessThan(Z_INDEX.HEADER);
        });
    });

    describe('FORM_CONFIG', () => {
        it('has all required form modes', () => {
            expect(FORM_CONFIG.MODES.ON_SUBMIT).toBe('onSubmit');
            expect(FORM_CONFIG.MODES.ON_CHANGE).toBe('onChange');
            expect(FORM_CONFIG.MODES.ON_BLUR).toBe('onBlur');
            expect(FORM_CONFIG.MODES.ON_TOUCHED).toBe('onTouched');
            expect(FORM_CONFIG.MODES.ALL).toBe('all');
        });

        it('has required validation messages', () => {
            expect(FORM_CONFIG.MESSAGES.REQUIRED).toBe(
                'This Field Is Required'
            );
        });
    });

    describe('IMAGE_SIZES', () => {
        it('has positive dimensions', () => {
            expect(IMAGE_SIZES.LOGO.WIDTH).toBeGreaterThan(0);
            expect(IMAGE_SIZES.LOGO.HEIGHT).toBeGreaterThan(0);
            expect(IMAGE_SIZES.LOGO.MOBILE_WIDTH).toBeGreaterThan(0);
            expect(IMAGE_SIZES.LOGO.MOBILE_HEIGHT).toBeGreaterThan(0);
        });

        it('has responsive logo sizes', () => {
            expect(IMAGE_SIZES.LOGO.MOBILE_WIDTH).toBeLessThan(
                IMAGE_SIZES.LOGO.WIDTH
            );
            expect(IMAGE_SIZES.LOGO.MOBILE_HEIGHT).toBeLessThan(
                IMAGE_SIZES.LOGO.HEIGHT
            );
        });
    });

    describe('COLORS', () => {
        it('has valid gradient strings', () => {
            expect(COLORS.GRADIENTS.PRIMARY).toContain('linear-gradient');
            expect(COLORS.GRADIENTS.TEXT_GRADIENT).toContain('linear-gradient');
        });

        it('has valid hex colors', () => {
            expect(COLORS.BRAND.PRIMARY_BLUE).toMatch(/^#[0-9A-F]{6}$/i);
            expect(COLORS.BRAND.ACCENT_CYAN).toMatch(/^#[0-9A-F]{6}$/i);
            expect(COLORS.BRAND.SUCCESS_GREEN).toMatch(/^#[0-9A-F]{6}$/i);
        });
    });

    describe('CONTACT_INFO_DATA', () => {
        it('has valid phone format', () => {
            expect(CONTACT_INFO_DATA.PHONE).toMatch(/^\+\d/);
        });

        it('has valid email format', () => {
            expect(CONTACT_INFO_DATA.EMAIL).toContain('@');
            expect(CONTACT_INFO_DATA.EMAIL).toContain('.');
        });

        it('has valid social URLs', () => {
            expect(CONTACT_INFO_DATA.SOCIAL_URLS.FACEBOOK).toContain(
                'facebook.com'
            );
            expect(CONTACT_INFO_DATA.SOCIAL_URLS.INSTAGRAM).toContain(
                'instagram.com'
            );
            expect(CONTACT_INFO_DATA.SOCIAL_URLS.LINKEDIN).toContain(
                'linkedin.com'
            );
        });
    });

    describe('NAVIGATION', () => {
        it('has main navigation links', () => {
            expect(NAVIGATION.MAIN_LINKS).toContain('Home');
            expect(NAVIGATION.MAIN_LINKS).toContain('Products');
            expect(NAVIGATION.MAIN_LINKS).toContain('Services');
            expect(NAVIGATION.MAIN_LINKS.length).toBe(6);
        });

        it('has footer navigation sections', () => {
            expect(NAVIGATION.FOOTER_COMPANY.length).toBeGreaterThan(0);
            expect(NAVIGATION.FOOTER_SERVICES.length).toBeGreaterThan(0);
        });
    });

    describe('CAROUSEL', () => {
        it('has positive configuration values', () => {
            expect(CAROUSEL.SWIPE_THRESHOLD).toBeGreaterThan(0);
            expect(CAROUSEL.GAP_SIZE).toBeGreaterThan(0);
        });
    });

    describe('INTERSECTION_CONFIG', () => {
        it('has valid threshold values', () => {
            expect(INTERSECTION_CONFIG.SCROLL_SPY_THRESHOLD).toBeGreaterThan(0);
            expect(
                INTERSECTION_CONFIG.SCROLL_SPY_THRESHOLD
            ).toBeLessThanOrEqual(1);
            expect(INTERSECTION_CONFIG.SCROLL_THRESHOLD).toBeGreaterThan(0);
        });
    });

    describe('Scroll ranges consistency', () => {
        it('BLUR_BALL has valid range', () => {
            expect(BLUR_BALL.SCROLL_RANGE[1]).toBeGreaterThan(
                BLUR_BALL.SCROLL_RANGE[0]
            );
            expect(BLUR_BALL.TOP_RANGE[1]).toBeLessThan(BLUR_BALL.TOP_RANGE[0]); // Negative movement
            expect(BLUR_BALL.SCALE_RANGE[1]).toBeLessThan(
                BLUR_BALL.SCALE_RANGE[0]
            ); // Scale down
        });

        it('INTRODUCTION has valid range', () => {
            expect(INTRODUCTION.SCROLL_RANGE[1]).toBeGreaterThan(
                INTRODUCTION.SCROLL_RANGE[0]
            );
            expect(INTRODUCTION.GAP_RANGE[1]).toBeLessThan(
                INTRODUCTION.GAP_RANGE[0]
            ); // Gap decreases
        });

        it('SERVICES_LIST has valid range', () => {
            expect(SERVICES_LIST.SCROLL_RANGE[1]).toBeGreaterThan(
                SERVICES_LIST.SCROLL_RANGE[0]
            );
            expect(SERVICES_LIST.GAP_RANGE[1]).toBeLessThan(
                SERVICES_LIST.GAP_RANGE[0]
            ); // Gap decreases
        });
    });
});
