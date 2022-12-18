import { formatArticleItem } from '@ytk6565.net/domain/dist/Article';

import json from './index.json';

import type { FeedItem, Feed } from './types';
import type {
  ArticleItem,
  FetchArticleItems,
} from '@ytk6565.net/domain/dist/Article';

const feed: Feed = json;

/**
 * RSS を記事アイテムに変換する
 * @param entry Contentful の記事
 * @returns 記事アイテム
 */
export const toArticleItem = (entry: FeedItem): ArticleItem => {
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
  return await feed.items.map(toArticleItem).map(formatArticleItem);
};
