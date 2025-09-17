'use client';
import React from 'react';
import { motion } from 'motion/react';
import ClientComment from '@/app/_components/ClientComment';
import { ClientsData } from '@/app/_lib/Data';
import type { CommentsController } from '@/app/_Types/ControllerType';
import { useWindowWidth } from '@/app/_hooks/useWindowSize';

/**
 * ClientsCommentsRow: horizontal scrolling client testimonials for desktop.
 */
export default function ClientsCommentsRow({ ref, commentRef, controls }: CommentsController) {
  const width = useWindowWidth();

  return (
    <div role="region" aria-label="Client testimonials carousel" className="relative">
      <div className="h-[450px] w-[100vw] overflow-hidden">
        <motion.div
          className="relative right-0 flex w-fit items-center gap-8"
          initial={{ left: '-200px', opacity: 0 }}
          whileInView={{ left: 0, opacity: 1 }}
          animate={controls}
          transition={{ duration: 0.35, ease: 'linear' }}
          viewport={{ amount: width > 1024 ? 0.45 : 0 }}
          ref={ref}
          dir="ltr"
        >
          {ClientsData.map((client, idx) => (
            <ClientComment
              key={idx}
              description={client.description}
              name={client.name}
              jobTitle={client.jopTitle}
              rate={client.rate}
              country={client.country}
              project={client.project}
              image={client.image}
              commentRef={commentRef}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
