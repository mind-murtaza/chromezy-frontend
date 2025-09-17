'use client';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export interface ClientCommentProps {
  description: string;
  name: string;
  jobTitle: string;
  rate: string;
  project: string;
  country: string;
  image: React.ReactElement;
  commentRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * ClientComment: displays a single client testimonial card.
 */
export default function ClientComment({ description, name, jobTitle, rate, project, country, image, commentRef }: ClientCommentProps) {
  return (
    <article
      ref={commentRef}
      className="h-[450px] w-[clamp(310px,47.15vw,400px)] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-[40px] transition-all duration-200 hover:bg-[#bdd5f433]"
    >
      <div className="h-8 w-8">
        <FaQuoteLeft className="h-8 w-8 text-[#0AB7A8]" />
      </div>
      <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
        <p className="min-h-[192px] font-medium">{description}</p>
        <div className="text-end">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-[#ffffff99]">{jobTitle}</p>
        </div>
      </div>
      <div className="mt-6 flex h-[54px] items-center justify-between">
        <ul className="text-[10px] font-normal text-[#ffffff99] space-y-1">
          <li>Star Rating - {rate}</li>
          <li>Project - {project}</li>
          <li>Country - {country}</li>
        </ul>
        {image}
      </div>
    </article>
  );
}
