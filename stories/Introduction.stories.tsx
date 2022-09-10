// Introduction.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const Introduction = () => (
  <div>
    <h1 className="text-2xl font-bold">
      Introduction to the Artem-UI Design System
    </h1>
    <br />
    The Artem-UI Design System was created to help us build products for our
    customers more efficiently. Established to be the single source of truth for
    product teams working on products across the globe, the Artem-UI Design
    System contains everything from Getting Started guides through to Core
    Components intended for adoption within each product. It enables product
    teams to design and develop with speed, consistency, and quality. Our
    dedicated Design Operations team works with the individual product teams
    across Audi to ensure the system continues to evolve to meet the needs of
    our designers, developers, and customers.
  </div>
);
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Introduction',
  component: Introduction,
} as ComponentMeta<typeof Introduction>;

export const Default: ComponentStory<typeof Introduction> = () => (
  <Introduction />
);
