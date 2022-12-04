import '@ytk6565.net/tailwindcss/style';

import { fetchBlogItems } from '@ytk6565.net/infrastructure/dist/Article/Blog';
import Home from '@ytk6565.net/ui/dist/components/pages/Home';
// import React, { Suspense } from 'react';

fetchBlogItems().then((items) => {
  // eslint-disable-next-line no-console
  console.log(items);
});

import type { FC } from 'react';

// const Home = React.lazy(
//   () => import('@ytk6565.net/ui/dist/components/pages/Home')
// );

const App: FC = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Home />
    // </Suspense>
  );
};

export default App;
