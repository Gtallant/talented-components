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
