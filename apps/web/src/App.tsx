import '@ytk6565.net/tailwindcss/style';

import YTKHome from '@ytk6565.net/ui/dist/components/pages/YTKHome';
// import React, { Suspense } from 'react';

import type { FC } from 'react';

// const YTKHome = React.lazy(
//   () => import('@ytk6565.net/ui/dist/components/pages/YTKHome')
// );

const App: FC = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <YTKHome />
    // </Suspense>
  );
};

export default App;
