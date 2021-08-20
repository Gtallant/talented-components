import React from 'react';
import { Story as StoryType, Meta } from '@storybook/react/types-6-0';
import Section from '.';
import type { SectionProps } from '.';

export default {
  title: 'Atoms/Section',
  component: Section,
} as Meta;

const Template: StoryType<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.decorators = [(Story) => (
  <div style={{
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#F0F6F9',
  }}
  >
    <div style={{ margin: '32px auto', width: '68%' }}>
      <Story />
    </div>
  </div>
)];
Default.args = {
  children: <div style={{ height: 225 }}><p>Hello World</p></div>,
};
