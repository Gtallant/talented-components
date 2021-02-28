import React from 'react';
import * as Styled from './Title.style';

const Title = ({
  text, level, markupLevel, className,
}: Props) => {
  const Comp = Styled[markupLevel || level];
  return (
    <Comp className={`${className} ${level}`}>{text}</Comp>
  );
};

interface Props {
  text: string,
  level: 'HEADING_1' | 'HEADING_2' | 'HEADING_3' | 'HEADING_4' | 'HEADING_5' | 'HEADING_6',
  markupLevel?: 'HEADING_1' | 'HEADING_2' | 'HEADING_3' | 'HEADING_4' | 'HEADING_5' | 'HEADING_6',
  className?: string,
}

Title.defaultProps = {
  markupLevel: undefined,
  className: '',
};

export { Title };
export type { Props };
