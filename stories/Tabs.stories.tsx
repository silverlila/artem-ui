// Button.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs, TabPanel } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = () => {
  return (
    <Tabs tabs={['tab #1', 'tab #2', 'tab #3']}>
      <TabPanel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti
        tempora est tempore totam soluta amet nulla deleniti similique quasi.
        Sed accusantium illum provident impedit, fugiat ipsa nobis debitis ut?
      </TabPanel>
      <TabPanel>hello world</TabPanel>
      <TabPanel>heloo</TabPanel>
    </Tabs>
  );
};
