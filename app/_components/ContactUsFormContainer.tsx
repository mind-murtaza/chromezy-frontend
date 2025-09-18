'use client';
import React, { useEffect, useState } from 'react';
import ContactUsForm from '@/app/_components/ContactUsForm';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { CONTACT_FORM } from '@/app/_lib/constants';

/**
 * ContactUsFormContainer: animated form panel with floating mail graphic.
 * Uses centralized constants for maintainable animation values.
 */
export default function ContactUsFormContainer() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();

    const [opacityState, setOpacityState] = useState<[number, number]>(CONTACT_FORM.VALUES.OPACITY_STATES.INITIAL);
    const top = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.POSITION, CONTACT_FORM.VALUES.TOP);
    const right = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.POSITION, CONTACT_FORM.VALUES.RIGHT);
    const heightMail = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.MAIL_SIZE, CONTACT_FORM.VALUES.MAIL_HEIGHT);
    const widthMail = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.MAIL_SIZE, CONTACT_FORM.VALUES.MAIL_WIDTH);
    const bgColor = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.MAIL_SIZE, CONTACT_FORM.VALUES.BG_COLOR);
    const opacity = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.OPACITY, opacityState);
    const overflow = useTransform(scrollY, CONTACT_FORM.SCROLL_RANGES.OVERFLOW, ['', 'hidden']);

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (e: number) => {
            if (e <= 4745) setOpacityState(CONTACT_FORM.VALUES.OPACITY_STATES.INITIAL);
            if (e >= 4752) setOpacityState(CONTACT_FORM.VALUES.OPACITY_STATES.FINAL);
        });
        return () => unsubscribe?.();
    }, [scrollY]);

    return (
            <motion.div
                className="relative right-[50px] min-h-[638px] w-[35.35%] space-y-5 rounded-[20px] bg-[#DBEBFF] px-10 py-[50px] max-[850px]:w-[40%] max-md:right-0 max-md:m-10 max-md:w-[86%] max-md:p-6 max-sm:mx-0 max-[650px]:w-full"
                style={{ overflow }}
            >
                <p className="text-2xl font-semibold leading-5 text-[#141517]">Let&apos;s talk!</p>
                <ContactUsForm />
                {!reduce && (
                    <motion.div className="absolute right-[-16px] top-[-90px] h/[130px] w/[167px]" style={{ top, right, height: heightMail, width: widthMail, opacity }}>
                        <Image src={'/images/contact-us/mail-icon.webp'} fill alt="mail" className="z-10" />
                        <motion.div className="scroll-container absolute bottom-2 left-2 z-[2] h/[90%] w/[90%] bg-[#AACFFE]" style={{ backgroundColor: bgColor }}></motion.div>
                    </motion.div>
                )}
            </motion.div>
    );
}
