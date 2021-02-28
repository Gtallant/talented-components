/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Faker from 'faker';
import Text from '.';
import type { TextProps } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text className={args.className}>{args.children}</Text>
);

export const Default = Template.bind({});
Default.args = {
  children: <p>{Faker.lorem.paragraph()}</p>,
};
