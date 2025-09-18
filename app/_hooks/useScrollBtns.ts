import { useEffect, useState } from 'react';
import type { CommentsController } from '@/app/_Types/ControllerType';
import { CAROUSEL } from '@/app/_lib/constants';

/**
 * useScrollBtns: manages swipe-based pagination for a carousel.
 */
export function useScrollBtns({ ref, commentRef, controls }: CommentsController) {
  const [swipe, setSwipe] = useState(0);
  const [count, setCount] = useState(0);

  /** Move to next page */
  function handleClickNext() {
    const width = commentRef.current?.offsetWidth ?? 0;
    const visible = Math.floor(window.innerWidth / width);
    const total = ref.current?.childElementCount ?? 0;
    if (count < total - visible) {
      setCount(c => c + 1);
      setSwipe(s => s - (width + CAROUSEL.GAP_SIZE));
    }
  }

  /** Move to previous page */
  function handleClickPrev() {
    if (count > 0) {
      const width = commentRef.current?.offsetWidth ?? 0;
      setCount(c => c - 1);
      setSwipe(s => s + (width + CAROUSEL.GAP_SIZE));
    }
  }

  // Animate swipe
  useEffect(() => {
    controls.start({ left: swipe });
  }, [controls, swipe]);

  // Reset on mount
  useEffect(() => {
    setSwipe(0);
  }, []);

  return { handleClickNext, handleClickPrev };
}
