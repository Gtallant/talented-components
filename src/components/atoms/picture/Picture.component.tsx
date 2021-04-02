import React from 'react';
import { getDefaultUrl } from './utils';
import PictureWrapper from './Picture.style';

const Picture = ({
  src, alt,
}: Props) => {
  const defaultUrl = getDefaultUrl(src);
  let sources: string | JSX.Element[] = '';
  if (Array.isArray(src)) {
    let breakpoints = src.filter((item) => item.breakpoint);
    breakpoints = breakpoints.sort((a: BreakpointSrc, b: BreakpointSrc) => {
      if (a.breakpoint && b.breakpoint) {
        return a.breakpoint - b.breakpoint;
      }
      if (b.breakpoint) {
        return 1;
      }
      return -1;
    });
    sources = breakpoints.map((item) => <source media={`"(min-width:${item.breakpoint}px)"`} srcSet={item.src} key={`${item.src}_${item.breakpoint}`} />);
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
  // Specifies the max-width to display that image at, the largest image shouldn't have a breakpoint
  breakpoint?: number,
}

interface Props {
  src: string | BreakpointSrc[],
  alt: string,
}

export { Picture };
export type { Props, BreakpointSrc };
