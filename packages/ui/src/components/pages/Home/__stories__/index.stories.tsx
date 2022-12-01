import { Home } from '..';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<typeof Home>;

export const Default: StoryObj<typeof Home> = {
  args: {
    className: '',
  },
};
