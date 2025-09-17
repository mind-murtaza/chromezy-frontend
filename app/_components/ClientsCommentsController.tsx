"use client";
import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useScrollBtns } from '@/app/_hooks/useScrollBtns';
import type { CommentsController } from '@/app/_Types/ControllerType';

/**
 * ClientsCommentsController: navigation buttons for desktop client comments carousel.
 */
export default function ClientsCommentsController({ ref, commentRef, controls }: CommentsController) {
  const { handleClickNext, handleClickPrev } = useScrollBtns({ ref, commentRef, controls });

  return (
    <div role="group" aria-label="Client comments navigation" className="flex items-center max-sm:hidden">
      <button
        type="button"
        aria-label="Previous comments"
        className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#40424C]"
        onClick={handleClickPrev}
      >
        <IoArrowBack className="h-5 w-5 text-white" />
      </button>
      <button
        type="button"
        aria-label="Next comments"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#40424C]"
        onClick={handleClickNext}
      >
        <IoArrowForward className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
