import type { RefObject } from 'react';
import { animationControls } from 'motion/react';

/**
 * CommentsController: controls and refs for comments carousel navigation.
 */
export type CommentsController = {
    /** container motion controls */
    controls: ReturnType<typeof animationControls>;
    /** ref to the scroll container */
    ref: RefObject<HTMLDivElement | null>;
    /** ref to individual comment item */
    commentRef: RefObject<HTMLDivElement | null>;
};
