import YTKHome from '..';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'pages/YTKHome',
  component: YTKHome,
  argTypes: {
    articleItems: { control: 'object' },
    className: { control: 'text' },
  },
} as Meta<typeof YTKHome>;

export const Default: StoryObj<typeof YTKHome> = {
  args: {
    articleItems: [
      {
        id: '1',
        title: '世界人権宣言',
        description:
          '人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が',
        permalink: '/articles/blog/1',
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
      },
      {
        id: '2',
        title: '世界人権宣言',
        description:
          '人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が',
        permalink: '/articles/blog/2',
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
      },
    ],
    className: '',
  },
};
