// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['slate', 'indigo', 'blue', 'white'],
      },
    },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Button</Button>
);
export const Default = Template.bind({});

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
