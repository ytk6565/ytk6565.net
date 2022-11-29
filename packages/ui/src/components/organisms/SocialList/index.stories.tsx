import { SocialList } from '.';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'organisms/SocialList',
  component: SocialList,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta<typeof SocialList>;

export const Default: StoryObj<typeof SocialList> = {
  args: {
    className: '',
  },
};
