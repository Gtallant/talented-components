import React from 'react';
import { Story as StoryType, Meta } from '@storybook/react/types-6-0';
import Card from '.';
import type { CardProps } from '.';

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta;

const Template: StoryType<CardProps> = (args) => <Card {...args} />;
const AllElevationsTemplate: StoryType<CardProps> = (args) => (
  <>
    <Card {...args} elevation={0} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={1} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={2} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={3} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={4} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={6} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={8} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={9} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={12} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={16} />
    <div style={{ height: 100 }} />
    <Card {...args} elevation={24} />
    <div style={{ height: 100 }} />
  </>
);

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
  children: <div style={{ height: 225 }} />,
};

export const AllElevations = AllElevationsTemplate.bind({});
AllElevations.decorators = [(Story) => (
  <div style={{
    position: 'absolute',
    inset: '0px',
    background: '#F0F6F9',
    overflow: 'scroll',
  }}
  >
    <div style={{ margin: '32px auto', width: '68%' }}>
      <Story />
    </div>
  </div>
)];
AllElevations.args = {
  children: <div style={{ height: 100 }} />,
};
