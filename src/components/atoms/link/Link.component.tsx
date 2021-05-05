import React from 'react';
import { nanoid } from 'nanoid';
import * as Styled from './Link.style';

const Link = ({
  className, children, href, accessibilityText, id,
}: Props) => {
  if (accessibilityText) {
    return (
      <>
        <Styled.a href={href} className={`link ${className}`} aria-describedby={id}>{children}</Styled.a>
        <Styled.span className="link__accessibility-text" id={id}>{accessibilityText}</Styled.span>
      </>
    );
  }
  return <Styled.a href={href} className={`link ${className}`}>{children}</Styled.a>;
};

interface Props {
  children: JSX.Element | string,
  href: string,
  className?: string,
  accessibilityText?: string,
  id?: string
}

Link.defaultProps = {
  className: '',
  accessibilityText: undefined,
  id: nanoid(),
};

export { Link };
export type { Props };
