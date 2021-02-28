import React from 'react';
import P from './Text.style';

const Text = ({
  className, children,
}: Props) => <P className={className}>{children}</P>;

interface Props {
  children: JSX.Element | string,
  className?: string,
}

Text.defaultProps = {
  className: '',
};

export { Text };
export type { Props };
