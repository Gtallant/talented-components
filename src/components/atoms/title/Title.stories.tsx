/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';
import type { TitleProps } from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem Ipsum',
  level: 'HEADING_1',
};
