import YTKSocialList from '..';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'organisms/YTKSocialList',
  component: YTKSocialList,
  argTypes: {},
} as Meta<typeof YTKSocialList>;

export const Default: StoryObj<typeof YTKSocialList> = {
  args: {},
};
