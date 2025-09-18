'use client';
import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';

/**
 * ContactUsCharacterImage: animated character within the contact section.
 */
export default function ContactUsCharacterImage() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const heightCharacter = useTransform(scrollY, [4600, 4800], ['max(120px,8vw)', 'max(120px,20.85vw)']);
    const widthCharacter = useTransform(scrollY, [4600, 4800], ['max(120px,8vw)', 'max(120px,20.85vw)']);
    const opacityCharacter = useTransform(scrollY, [4600, 4800], [0.3, 1]);
    const topCharacter = useTransform(scrollY, [4600, 4800], [180, 0]);

    if (reduce) {
        return (
            <div className="relative h-[max(120px,20vw)] w-[max(120px,20vw)]">
                <Image src={'/images/contact-us/character.webp'} fill alt="ContactUsCharacter" className="object-contain" />
            </div>
        );
    }

    return (
        
            <motion.div className="relative h-[max(120px,20vw)] w-[max(120px,20vw)]" style={{ width: widthCharacter, height: heightCharacter, opacity: opacityCharacter, top: topCharacter }}>
                <Image src={'/images/contact-us/character.webp'} fill alt="ContactUsCharacter" className="object-contain" />
            </motion.div>
    );
}
