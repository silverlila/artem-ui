// Button.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = () => {
  return (
    <Popover title="Display below">
      <ul>
        <li>Hello world</li>
        <li>Hello world2</li>
        <li>Hello world3</li>
      </ul>
    </Popover>
  );
};
