// Button.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Disclosure } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Disclosure',
  component: Disclosure,
} as ComponentMeta<typeof Disclosure>;

export const Default: ComponentStory<typeof Disclosure> = () => {
  const [open, setOpen] = useState(false);
  return (
    <Disclosure title="Disclosure #1">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet
      quos a perferendis odit magni dolor, natus error temporibus possimus
      adipisci at dicta vel minima, hic eos? Et, repellat repellendus.
    </Disclosure>
  );
};
