import {
  formatArticle,
  formatArticleItem,
} from '@ytk6565.net/domain/dist/Article';
import z from 'zod';

import type { IPostsFields } from '@/types/generated/contentful';
import type {
  Article,
  ArticleItem,
  FetchArticle,
  FetchArticleItems,
} from '@ytk6565.net/domain/dist/Article';
import type { Entry } from 'contentful';

type Blog = {
  sys: {
    id: Entry<IPostsFields>['sys']['id'];
    createdAt: Entry<IPostsFields>['sys']['createdAt'];
    updatedAt: Entry<IPostsFields>['sys']['updatedAt'];
  };
  fields: {
    title: Entry<IPostsFields>['fields']['title'];
    description: Entry<IPostsFields>['fields']['description'];
    body: Entry<IPostsFields>['fields']['body'];
  };
};

const blogSchema: z.ZodType<Blog> = z.object({
  sys: z.object({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  fields: z.object({
    title: z.string(),
    description: z.string(),
    body: z.string(),
  }),
});

/**
 * ブログを記事に変換する
 * @param entry Contentful の記事
 * @returns 記事
 */
const toArticle = (entry: Blog): Article => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    description: entry.fields.description,
    body: entry.fields.body,
    permalink: `/articles/blogs/${entry.sys.id}`,
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };
};

/**
 * ブログを記事アイテムに変換する
 * @param entry Contentful の記事
 * @returns 記事アイテム
 */
const toArticleItem = (entry: Blog): ArticleItem => {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    description: entry.fields.description,
    permalink: `/articles/blogs/${entry.sys.id}`,
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };
};

/**
 * ブログの記事を fetch する
 * @param spaceId Contentful の Space ID
 * @param accessToken Contentful の Access Tokens
 * @returns ブログの記事
 */
const fetcherFactory =
  (spaceId?: string, accessToken?: string): Fetcher =>
  async (id) => {
    if (!spaceId || !accessToken) {
      throw new Error('spaceId または accessToken が不正です。');
    }

    const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries`;
    const url = id ? `${baseUrl}/${id}` : baseUrl;

    return await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

const fetcher = fetcherFactory(
  process.env.CONTENTFUL_SPACE_ID,
  process.env.CONTENTFUL_DELIVERY_TOKEN
);

type Fetcher = (id?: string) => Promise<Response>;

/**
 * ブログの記事を取得する
 * @returns ブログの記事
 */
export const fetchBlog: FetchArticle = async (id) => {
  const response = await fetcher(id);
  const data = await response.json();
  const safeParseReturn = blogSchema.safeParse(data);
  if (!safeParseReturn.success) {
    throw new Error('ブログの記事が不正です。');
  }

  return formatArticle(toArticle(safeParseReturn.data));
};

/**
 * ブログの記事の一覧を取得する
 * @returns ブログの記事の一覧
 */
export const fetchBlogItems: FetchArticleItems = async () => {
  const response = await fetcher();
  const data = await response.json();
  const items: ArticleItem[] = [];

  if (!Array.isArray(data.items)) {
    throw new Error('ブログの記事の一覧が不正です。');
  }

  for (const entry of data.items) {
    const safeParseReturn = blogSchema.safeParse(entry);
    if (!safeParseReturn.success) {
      throw new Error('ブログの記事の一覧が不正です。');
    }

    items.push(formatArticleItem(toArticleItem(safeParseReturn.data)));
  }

  return items;
};
