import '@ytk6565.net/tailwindcss/style';

import { sortByNewest } from '@ytk6565.net/domain/dist/Date';
import { fetchBlogItems } from '@ytk6565.net/infrastructure/dist/Article/Blog';
import { fetchFeedItems } from '@ytk6565.net/infrastructure/dist/Article/Feed';
import YTKHome from '@ytk6565.net/ui/dist/components/pages/YTKHome';
import { useEffect, useState } from 'react';

import type { ArticleItem } from '@ytk6565.net/domain/dist/Article';
import type { FC } from 'react';

const App: FC = () => {
  const [articleItems, setArticleItems] = useState<ArticleItem[]>([]);

  useEffect(() => {
    Promise.all([fetchFeedItems(), fetchBlogItems()]).then(
      ([blogItems, feedItems]) => {
        const articlesItems = [...blogItems, ...feedItems].sort(
          ({ createdAt: a }, { createdAt: b }) => sortByNewest(a, b)
        );
        setArticleItems(articlesItems);
      }
    );
  }, []);

  return <YTKHome articleItems={articleItems} />;
};

export default App;
