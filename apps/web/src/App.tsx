import '@ytk6565.net/tailwindcss/style';

import { fetchBlogItems } from '@ytk6565.net/infrastructure/dist/Article/Blog';
import feedItems from '@ytk6565.net/infrastructure/dist/Article/Feed';
import YTKHome from '@ytk6565.net/ui/dist/components/pages/YTKHome';
import { useEffect, useState } from 'react';

import type { ArticleItem } from '@ytk6565.net/domain/dist/Article';
import type { FC } from 'react';

const App: FC = () => {
  const [articleItems, setArticleItems] = useState<ArticleItem[]>([]);

  useEffect(() => {
    fetchBlogItems().then((blogItems) => {
      setArticleItems([...blogItems, ...feedItems]);
    });
  }, []);

  return <YTKHome articleItems={articleItems} />;
};

export default App;
