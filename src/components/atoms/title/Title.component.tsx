import React from 'react';
import * as Styled from './Title.style';

const Title = ({
  text, style, markup, className,
}: Props) => {
  const Comp = Styled[markup || style];
  return (
    <Comp className={`${className} ${style}`}>{text}</Comp>
  );
};

interface Props {
  text: string,
  style: 'HEADING_1' | 'HEADING_2' | 'HEADING_3' | 'HEADING_4' | 'HEADING_5' | 'HEADING_6',
  markup?: 'HEADING_1' | 'HEADING_2' | 'HEADING_3' | 'HEADING_4' | 'HEADING_5' | 'HEADING_6',
  className?: string,
}

Title.defaultProps = {
  markup: undefined,
  className: '',
};

export { Title };
export type { Props };
