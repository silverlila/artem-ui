// Field.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Field } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Field',
  component: Field,
  argTypes: {
    label: {
      defaultValue: 'First name',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      defaultValue: 'First name',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = args => <Field {...args} />;
export const Default = Template.bind({});

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  placeholder: 'example@mail.com',
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
};
