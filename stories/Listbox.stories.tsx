// Listbox.stories.ts|tsx
import React, { Fragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Listbox',
  component: Listbox,
  argTypes: {
    items: {
      defaultValue: [
        {
          id: 1,
          label: 'lorem ipsum #1',
        },
        {
          id: 2,
          label: 'lorem ipsum #2',
        },
        {
          id: 3,
          label: 'lorem ipsum #3',
        },
      ],
    },
  },
} as ComponentMeta<typeof Listbox>;
const Template: ComponentStory<typeof Listbox> = args => {
  const [selected, setSelected] = useState(args.items[0]);
  return <Listbox {...args} selected={selected} setSelected={setSelected} />;
};
export const Default = Template.bind({});
