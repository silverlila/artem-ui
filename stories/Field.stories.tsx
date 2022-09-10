// Field.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Field } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Field',
  component: Field,
} as ComponentMeta<typeof Field>;

export const Default: ComponentStory<typeof Field> = () => {
  return <Field label="First name" placeholder="John Smith" />;
};
