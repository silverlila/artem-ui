// Button.stories.ts|tsx

import React, { Fragment, useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Modal } from '../src';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        title="Modal example"
        isOpen={open}
        closeModal={() => setOpen(false)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
        voluptate quaerat minima quidem, quos veniam explicabo. Vel,
        perspiciatis. Porro quas facilis excepturi illum optio? Rerum
        dignissimos deleniti eveniet iure sapiente?
      </Modal>
    </Fragment>
  );
};
