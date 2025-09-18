'use client';
import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useScrollBtns } from '@/app/hooks/useScrollBtns';
import type { CommentsController } from '@/app/Types/ControllerType';

/**
 * ClientsCommentsMobileController: swipe navigation for mobile client testimonials.
 */
export default function ClientsCommentsMobileController({ ref, commentRef, controls }: CommentsController) {
  const { handleClickNext, handleClickPrev } = useScrollBtns({ ref, commentRef, controls });

  return (
    <div role="group" aria-label="Mobile comments navigation" className="flex justify-center gap-10 max-sm:flex lg:hidden">
      <button
        type="button"
        aria-label="Previous comments"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#40424C]"
        onClick={handleClickPrev}
      >
        <IoArrowBack className="h-6 w-6 text-white" />
      </button>
      <button
        type="button"
        aria-label="Next comments"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#40424C]"
        onClick={handleClickNext}
      >
        <IoArrowForward className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
