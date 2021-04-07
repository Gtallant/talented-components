import React from 'react';
import Styled from './Card.style';

const Card = ({
  children,
  elevation,
}: Props) => <Styled className={`card ${elevation ? `--elevation-${elevation}` : ''}`}>{children}</Styled>;

interface Props {
  children: JSX.Element | string,
  elevation: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24,
}

export { Card };
export type { Props };
