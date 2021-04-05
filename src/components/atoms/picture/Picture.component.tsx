import React from 'react';
import { getDefaultUrl, sortSourcesByBreakpoint } from './Picture.utils';
import PictureWrapper from './Picture.style';

const Picture = ({
  src, alt,
}: Props) => {
  const defaultUrl = getDefaultUrl(src);
  let sources: string | JSX.Element[] = '';
  if (Array.isArray(src)) {
    let breakpoints = src.filter((item) => item.breakpoint);
    breakpoints = sortSourcesByBreakpoint(breakpoints);
    sources = breakpoints.map((item) => <source media={`(min-width:${item.breakpoint}px)`} srcSet={item.src} key={`${item.src}_${item.breakpoint}`} />);
  }

  return (
    <PictureWrapper>
      {sources}
      <img src={defaultUrl} alt={alt} />
    </PictureWrapper>
  );
};

interface BreakpointSrc {
  src: string,
  // Tthe min-width to display that image at, the smallest image shouldn't have a breakpoint
  breakpoint?: number,
}

interface Props {
  src: string | BreakpointSrc[],
  alt: string,
}

export { Picture };
export type { Props, BreakpointSrc };
