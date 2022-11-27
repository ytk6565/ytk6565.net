import '@ytk6565.net/tailwindcss/style';

import { fetchPost } from '@ytk6565.net/domain/dist/API';
import { Blog, getTitle } from '@ytk6565.net/domain/dist/Blog';
import { Home } from '@ytk6565.net/ui';

const blog: Blog = {
  id: '1',
  title: 'Hello World',
  content: 'Hello World',
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
};
// eslint-disable-next-line no-console
console.log(getTitle(blog));

fetchPost(blog.id)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('success');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('error');
  });

import type { FC } from 'react';

const App: FC = () => {
  return <Home />;
};

export default App;
