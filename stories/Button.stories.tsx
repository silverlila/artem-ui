// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonComponent: ComponentStory<typeof Button> = () => (
  <Button variant="solid" color="blue">
    Button
  </Button>
);
export const Solid: ComponentStory<typeof Button> = () => (
  <Button variant="solid" color="slate">
    Solid button
  </Button>
);
export const Outline: ComponentStory<typeof Button> = () => (
  <Button variant="outline" color="slate">
    Outline button
  </Button>
);
