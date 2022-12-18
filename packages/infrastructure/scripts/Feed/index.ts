import { parser } from './lib';

import type { Feed } from '@/Article/Feed/types';

import z from 'zod';

type FetchFeed = () => Promise<z.infer<typeof feedSchema>>;

export const feedSchema: z.ZodType<Feed> = z.object({
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
 * RSS の記事の一覧を取得する
 * @returns RSS の記事の一覧
 */
export const fetchFeed: FetchFeed = async () => {
  const feed = await parser.parseURL('https://zenn.dev/ytk6565/feed');

  const safeParseReturn = feedSchema.safeParse(feed);
  if (!safeParseReturn.success) {
    throw new Error('RSS の記事の一覧が不正です。');
  }

  return safeParseReturn.data;
};

fetchFeed();
