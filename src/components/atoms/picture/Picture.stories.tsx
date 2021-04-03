import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Picture from '.';
import type { PictureProps } from '.';
import TEST_DATA from './Picture.constants';

export default {
  title: 'Atoms/Picture',
  component: Picture,
} as Meta;

const Template: Story<PictureProps> = (args) => <Picture {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: TEST_DATA.src,
  alt: TEST_DATA.altText,
};

export const MultipleSources = Template.bind({});
MultipleSources.args = {
  src: TEST_DATA.srcArray,
  alt: TEST_DATA.altText,
};
