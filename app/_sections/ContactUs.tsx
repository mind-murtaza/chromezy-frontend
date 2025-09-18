import React from 'react';
import Image from 'next/image';
import VioletLight from '@/app/_components/VioletLight';
import ContactUsFormContainer from '@/app/_components/ContactUsFormContainer';
import ContactUsInfoContainer from '@/app/_components/ContactUsInfoContainer';
import ContactUsCharacterImage from '@/app/_components/ContactUsCharacterImage';
import ContactUsInfo from '@/app/_components/ContactUsInfo';
import { SCROLL_DISTANCES } from '@/app/_lib/constants';

/**
 * ContactUs: section combining contact info panel and inquiry form.
 * Uses centralized constants for maintainable scroll triggers.
 */
export default function ContactUs() {
    return (
        <section className="relative scroll-mt-[350px]" id="ContactUs" aria-label="Contact Us">
            <VioletLight className="bottom-[-20%] left-0 z-[-1] h-[570px] w-[570px]" distance={SCROLL_DISTANCES.VIOLET_LIGHT.CONTACT} />
            <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px] max-md:px-6 max-sm:py-14">
                <div className="relative flex h-full w-full items-center rounded-[80px] bg-[#AACFFE] max-md:flex-col max-md:rounded-[30px]">
                    <ContactUsInfoContainer>
                        <>
                            <Image
                                src={'/images/contact-us/contact-us-form-background-image.webp'}
                                fill
                                alt="Contact section background"
                                className="rounded-l-[80px] object-cover max-md:rounded-[30px]"
                            />
                            <div className="relative top-[85px] mx-auto flex w-[75%] flex-col items-center justify-center p-4 text-center max-md:top-0 max-md:h/full">
                                <ContactUsCharacterImage />
                                <ContactUsInfo />
                            </div>
                        </>
                    </ContactUsInfoContainer>
                    <ContactUsFormContainer />
                </div>
            </div>
        </section>
    );
}
