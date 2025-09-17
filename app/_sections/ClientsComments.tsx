'use client';
import { useAnimation } from 'motion/react';
import { useRef } from 'react';
import SectionHeader from '../_components/SectionHeader';
import ClientsCommentsRow from '../_components/ClientsCommentsRow';
import ClientsCommentsController from '../_components/ClientsCommentsController';
import ClientsCommentsMobileController from '../_components/ClientsCommentsMobileController';

function ClientsComments() {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement | null>(null);
    const commentRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div className="space-y-12 p-20 max-md:px-6 max-sm:space-y-10 max-sm:py-14">
                <div className="flex h-[90px] items-center justify-between">
                    <SectionHeader
                        className="space-y-4 lg:whitespace-nowrap"
                        title=" Our Happy Clients"
                        paragraph=" Dummy ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <ClientsCommentsController
                        ref={ref}
                        commentRef={commentRef}
                        controls={controls}
                    />
                </div>
                <ClientsCommentsRow
                    ref={ref}
                    commentRef={commentRef}
                    controls={controls}
                />
                <ClientsCommentsMobileController
                    ref={ref}
                    commentRef={commentRef}
                    controls={controls}
                />
            </div>
        </>
    );
}

export default ClientsComments;
