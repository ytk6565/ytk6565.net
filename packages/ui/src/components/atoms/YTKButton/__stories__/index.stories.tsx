import YTKButton from '..';

import type { StoryObj, Meta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/YTKButton',
  component: YTKButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof YTKButton>;

export const Primary: StoryObj<typeof YTKButton> = {
  args: { primary: true, label: 'Button' },
};

export const Secondary: StoryObj<typeof YTKButton> = {
  args: {
    label: 'Button',
  },
};

export const Large: StoryObj<typeof YTKButton> = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: StoryObj<typeof YTKButton> = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
