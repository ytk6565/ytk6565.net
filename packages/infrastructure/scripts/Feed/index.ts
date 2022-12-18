import RSSParser from 'rss-parser';
import z from 'zod';

const rssParser = new RSSParser();

import type {
  ArticleItem,
  FetchArticleItems,
} from '@ytk6565.net/domain/dist/Article';

type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

type Feed = {
  items: FeedItem[];
};

const feedSchema: z.ZodType<Feed> = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      link: z.string(),
      pubDate: z.string(),
      contentSnippet: z.string(),
    })
  ),
});

/**
 * RSS を記事アイテムに変換する
 * @param entry Contentful の記事
 * @returns 記事アイテム
 */
const toArticleItem = (entry: FeedItem): ArticleItem => {
  const paths = entry.link.split('/');
  const id = paths[paths.length - 1];

  return {
    id,
    title: entry.title,
    description: entry.contentSnippet,
    permalink: entry.link,
    createdAt: entry.pubDate,
    updatedAt: '',
  };
};

/**
 * RSS の記事の一覧を取得する
 * @returns RSS の記事の一覧
 */
export const fetchFeedItems: FetchArticleItems = async () => {
  const feed = await rssParser.parseURL('https://zenn.dev/ytk6565/feed');

  const safeParseReturn = feedSchema.safeParse(feed);
  if (!safeParseReturn.success) {
    throw new Error('RSS の記事の一覧が不正です。');
  }

  return safeParseReturn.data.items.map(toArticleItem);
};
