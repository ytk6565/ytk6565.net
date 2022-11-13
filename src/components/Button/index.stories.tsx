import { StoryObj, Meta } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: { primary: true, label: 'Button' },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
