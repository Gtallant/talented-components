/* eslint-disable import/no-cycle */
import { BreakpointSrc } from './Picture.component';

export const temp = null;

export const getDefaultUrl = (src: string | BreakpointSrc[]): string => {
  if (typeof src === 'string') {
    return src;
  }
  const srcArr = [...src];
  const lastItemInSrcSet = srcArr.pop();
  return lastItemInSrcSet ? lastItemInSrcSet.src : '';
};

export const sortSourcesByBreakpoint = (breakpoints: BreakpointSrc[]) => {
  const sortedBreakponts = breakpoints.sort((a: BreakpointSrc, b: BreakpointSrc) => {
    if (a.breakpoint && b.breakpoint) {
      return a.breakpoint - b.breakpoint;
    }
    if (b.breakpoint) {
      return 1;
    }
    return -1;
  });
  return sortedBreakponts;
};
