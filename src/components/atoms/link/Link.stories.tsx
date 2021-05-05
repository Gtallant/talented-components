/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link from '.';
import type { LinkProps } from '.';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  href: '/?path=/story/atoms-link--default',
  accessibilityText: undefined,
};
