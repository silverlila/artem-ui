// Grid.stories.ts|tsx
import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Col } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    cols: {
      defaultValue: 2,
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Grid>;
const Template: ComponentStory<typeof Grid> = args => (
  <Grid {...args} className="gap-2">
    <div className="p-6 bg-indigo-100">Hello world</div>
    <div className="p-6 bg-indigo-100">Hello world</div>
    <div className="p-6 bg-indigo-100">Hello world</div>
    <div className="p-6 bg-indigo-100">Hello world</div>
  </Grid>
);
export const Default = Template.bind({});
