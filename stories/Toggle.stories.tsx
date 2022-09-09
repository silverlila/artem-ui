// Button.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const ToggleExample: ComponentStory<typeof Toggle> = () => {
  const [open, setOpen] = useState(false);
  return <Toggle enabled={open} setEnabled={() => setOpen(!open)} />;
};
