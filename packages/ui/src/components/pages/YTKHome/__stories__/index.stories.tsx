import YTKHome from '..';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'pages/YTKHome',
  component: YTKHome,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<typeof YTKHome>;

export const Default: StoryObj<typeof YTKHome> = {
  args: {
    className: '',
  },
};
