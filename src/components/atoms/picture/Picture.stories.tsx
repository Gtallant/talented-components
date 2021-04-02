import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Picture from '.';
import type { PictureProps } from '.';

export default {
  title: 'Atoms/Picture',
  component: Picture,
} as Meta;

const Template: Story<PictureProps> = (args) => <Picture {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder image',
};

export const MultipleSources = Template.bind({});
MultipleSources.args = {
  src: [
    { src: 'https://via.placeholder.com/300', breakpoint: 1025 },
    { src: 'https://via.placeholder.com/250', breakpoint: 769 },
    { src: 'https://via.placeholder.com/200', breakpoint: 481 },
    { src: 'https://via.placeholder.com/150' },
  ],
  alt: 'Placeholder image',
};
