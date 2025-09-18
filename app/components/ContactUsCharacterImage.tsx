'use client';
import React from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
} from 'motion/react';
import Image from 'next/image';
import { CONTACT_CHARACTER } from '@/app/lib/constants';

/**
 * ContactUsCharacterImage: animated character within the contact section.
 * Uses centralized constants for maintainable animation values.
 */
export default function ContactUsCharacterImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const heightCharacter = useTransform(
        scrollY,
        CONTACT_CHARACTER.SCROLL_RANGE,
        CONTACT_CHARACTER.SIZE_RANGE
    );
    const widthCharacter = useTransform(
        scrollY,
        CONTACT_CHARACTER.SCROLL_RANGE,
        CONTACT_CHARACTER.SIZE_RANGE
    );
    const opacityCharacter = useTransform(
        scrollY,
        CONTACT_CHARACTER.SCROLL_RANGE,
        CONTACT_CHARACTER.OPACITY_RANGE
    );
    const topCharacter = useTransform(
        scrollY,
        CONTACT_CHARACTER.SCROLL_RANGE,
        CONTACT_CHARACTER.TOP_RANGE
    );

    if (reduce) {
        return (
            <div className="relative h-[max(120px,20vw)] w-[max(120px,20vw)]">
                <Image
                    src={'/images/contact-us/character.webp'}
                    fill
                    alt="ContactUsCharacter"
                    className="object-contain"
                />
            </div>
        );
    }

    return (
        <motion.div
            className="relative h-[max(120px,20vw)] w-[max(120px,20vw)]"
            style={{
                width: widthCharacter,
                height: heightCharacter,
                opacity: opacityCharacter,
                top: topCharacter,
            }}
        >
            <Image
                src={'/images/contact-us/character.webp'}
                fill
                alt="ContactUsCharacter"
                className="object-contain"
            />
        </motion.div>
    );
}
