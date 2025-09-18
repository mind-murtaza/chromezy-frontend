import React from 'react';
import GoTopAnimation from './GoTopAnimation';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { CONTACT_INFO_DATA } from '@/app/_lib/constants';

/**
 * ContactUsInfo: heading and quick contact tiles.
 * Uses centralized contact constants for maintainable information.
 */
export default function ContactUsInfo() {
    return (
        <>
            <GoTopAnimation idx={0} startNumber={0} delay={0.3}>
                <div className="relative mt-6 space-y-2">
                    <h2 className="text-[40px] font-bold max-sm:text-[32px]">Contact Us</h2>
                    <p className="text-sm">Talk with us to know how we can make you a part of a thriving digital landscape</p>
                </div>
                <div className="mx-auto mt-6 h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5 max-md:w-[135%] max-sm:w-full">
                    <div className="flex items-center justify-between border-b border-[#0000001a] pb-4">
                        <div className="flex items-center gap-2">
                            <PhoneIcon width={24} height={24} />
                            <p className="text-xs">Phone</p>
                        </div>
                        <p className="font-semibold">{CONTACT_INFO_DATA.PHONE}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                            <MailIcon width={24} height={24} />
                            <p className="text-xs">Email</p>
                        </div>
                        <p className="font-semibold">{CONTACT_INFO_DATA.EMAIL}</p>
                    </div>
                </div>
            </GoTopAnimation>
        </>
    );
}
