// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = () => (
  <Alert type="success" title="Hello world" message="lorem ispums" />
);
export const SuccessAlert: ComponentStory<typeof Alert> = () => (
  <Alert type="success" title="Hello world" message="lorem ispums" />
);
export const ErrorAlert: ComponentStory<typeof Alert> = () => (
  <Alert type="error" title="Hello world" message="lorem ispums" />
);
export const WarningAlert: ComponentStory<typeof Alert> = () => (
  <Alert type="warning" title="Hello world" message="lorem ispums" />
);
