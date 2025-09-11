// Global type definitions for Chromezy

// Animation types
export interface MotionVariant {
    initial: Record<string, any>;
    animate: Record<string, any>;
    exit?: Record<string, any>;
    transition?: Record<string, any>;
}

export interface AnimationConfig {
    variants: Record<string, MotionVariant>;
    duration?: number;
    ease?: string;
    stagger?: number;
}

// Component prop types
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
    id?: string;
}

// Navigation types
export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
    badge?: string;
}

// Service types
export interface ServiceCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: 'blue' | 'red' | 'orange' | 'green';
    features: string[];
    ctaText: string;
    ctaHref: string;
}

// Success story types
export interface SuccessStory {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    href?: string;
}

// Technology types
export interface TechStack {
    category: string;
    technologies: Technology[];
}

export interface Technology {
    name: string;
    icon: string;
    description?: string;
}

// Blog/Insights types
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: Author;
    publishedAt: string;
    readTime: number;
    category: string;
    slug: string;
}

export interface Author {
    name: string;
    avatar?: string;
    role?: string;
}

// Contact form types
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    lookingFor: string;
    message: string;
}

export interface ContactFormState {
    data: ContactFormData;
    errors: Partial<ContactFormData>;
    isSubmitting: boolean;
    isSubmitted: boolean;
}

// API response types
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// Utility types
export type ColorVariant = 'primary' | 'secondary' | 'accent' | 'neutral';
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
export type MotionDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

// Viewport and breakpoint types
export interface ViewportState {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

export interface ScrollState {
    scrollY: number;
    direction: 'up' | 'down';
    isScrolling: boolean;
}

// SEO and metadata types
export interface SEOData {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
    structuredData?: Record<string, any>;
}

// Error types
export interface AppError {
    code: string;
    message: string;
    details?: Record<string, any>;
}

// Performance metrics
export interface PerformanceMetrics {
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
    inp?: number;
}

export type { ReactNode } from 'react';
