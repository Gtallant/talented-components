/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Faker from 'faker';
import Text from '.';
import type { TextProps } from '.';
import Title from '../title';

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text className={args.className}>{args.children}</Text>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>{Faker.lorem.paragraphs(2)}</p>
      <Title level="HEADING_3" text="Styles" />
      <br />
      <Title level="HEADING_6" text="Bold" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <strong>This is what bolded text looks like.</strong>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Italics" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <em>This is what italic text looks like.</em>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Hilight" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <mark>This is what hilighted text looks like.</mark>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Small" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <small>This is what small text looks like.</small>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Deleted" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <del>This is what deleted text looks like.</del>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Inserted" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <ins>This is what inserted text looks like.</ins>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Subscript" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <sub>This is what subscript text looks like.</sub>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
      <Title level="HEADING_6" text="Superscript" />
      <p>
        {Faker.lorem.sentences(1)}
        &nbsp;
        <sup>This is what superscript text looks like.</sup>
        &nbsp;
        {Faker.lorem.sentences(3)}
      </p>
    </>
  ),
};
