import React from 'react';
import { ColorPallete, DEFAULT_PALLETE } from '../../../config/base';
import Styled from './Section.style';

const Section = ({
  children,
  colorPallete = DEFAULT_PALLETE,
}: Props) => <Styled className={`section --colorTheme-${colorPallete.name}`}>{children}</Styled>;

interface Props {
  children: JSX.Element | string,
  colorPallete?: ColorPallete,
}

Section.defaultProps = {
  colorPallete: DEFAULT_PALLETE,
};

Section.displayName = 'Section';

export { Section };
export type { Props };
