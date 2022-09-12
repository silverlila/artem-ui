// Radio.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroup from '../src/components/radio';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Radio Group',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = args => (
  <RadioGroup
    items={[
      {
        label: 'Items #1',
        description: 'lorem ipsum #1',
      },
      {
        label: 'Items #2',
        description: 'lorem ipsum #2',
      },
      {
        label: 'Items #3',
        description: 'lorem ipsum #3',
      },
    ]}
  />
);
export const Default = Template.bind({});
