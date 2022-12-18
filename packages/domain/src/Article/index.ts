import z from 'zod';

import { toJST } from '@/Date';
import { trim } from '@/String';

/**
 * 投稿のスキーマ
 */
export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  permalink: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
});

/**
 * 投稿アイテムのスキーマ
 */
export const articleItemSchema = articleSchema.omit({ body: true });

/**
 * 投稿
 */
export type Article = z.infer<typeof articleSchema>;

/**
 * 投稿アイテム
 */
export type ArticleItem = z.infer<typeof articleItemSchema>;

/**
 * 投稿を取得する
 */
export type FetchArticle = (id: string) => Promise<Article>;

/**
 * 投稿の一覧を取得する
 */
export type FetchArticleItems = () => Promise<ArticleItem[]>;

/**
 * 投稿アイテムの説明の最大文字数
 */
export const MAX_ARTICLE_ITEM_DESCRIPTION_LENGTH = 100;

/**
 * 投稿アイテムの説明をトリミングする
 * @param articleItem 投稿アイテム
 * @returns トリミングされた投稿アイテムの説明
 */
const formatArticleItemDescription = (
  articleItem: ArticleItem
): ArticleItem => {
  return {
    ...articleItem,
    description: trim(
      articleItem.description,
      MAX_ARTICLE_ITEM_DESCRIPTION_LENGTH
    ),
  };
};

/**
 * 投稿または投稿アイテムの日付をフォーマットする
 * @param value 投稿または投稿アイテム
 * @returns 日付がフォーマットされた投稿または投稿アイテム
 */
const formatDate = <T extends Article | ArticleItem>(value: T): T => {
  return {
    ...value,
    createdAt: toJST(value.createdAt),
    updatedAt: value.updatedAt ? toJST(value.updatedAt) : '',
  };
};

/**
 * 投稿をフォーマットする
 * @param article 投稿
 * @returns フォーマットされた投稿
 */
export const formatArticle = (article: Article): Article => {
  return formatDate(article);
};

/**
 * 投稿アイテムをフォーマットする
 * @param articleItem 投稿アイテム
 * @returns フォーマットされた投稿アイテム
 */
export const formatArticleItem = (articleItem: ArticleItem): ArticleItem => {
  return formatArticleItemDescription(formatDate(articleItem));
};
