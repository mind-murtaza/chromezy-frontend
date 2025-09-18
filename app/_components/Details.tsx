import React from 'react';
import Logo from './Logo';
import { MailIcon, PhoneIcon } from 'lucide-react';

/**
 * Details: footer brand blurb and contact details with small legal links.
 */
export default function Details() {
    return (
        <>
            <div className="h-fit space-y-4 max-md:flex max-md:flex-col max-md:items-center">
                <div className="space-y-2">
                    <Logo />
                    <p className="w-[298px] pl-[46px] text-xs text-[#ffffff99] max-md:p-0 max-md:text-center max-md:text-sm">
                        Not just about software & Product development; we&apos;re your tech partners, crafting modern digital solutions for next-gen excellence!
                    </p>
                </div>
                <div className="flex items-center space-x-3 pl-[46px] text-xs text-[#ffffffcc] max-md:p-0" aria-label="Legal links">
                    <p>Terms</p>
                    <p>|</p>
                    <p>Privacy</p>
                </div>
                <div className="flex items-center gap-4" aria-label="Phone">
                    <PhoneIcon width={20} height={20} className="text-[#ffffffcc]" />
                    <p className="font-semibold">+1 315 308 0901</p>
                </div>
                <div className="flex items-center gap-4" aria-label="Email">
                    <MailIcon width={20} height={20} className="text-[#ffffffcc]" />
                    <p className="font-semibold">sales@chromezy.com</p>
                </div>
            </div>
        </>
    );
}
