import z from 'zod';

/**
 * 投稿のスキーマ
 */
export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  permalink: z.string(),
  thumbnail: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

/**
 * 投稿のアイテムのスキーマ
 */
export const articleItemSchema = articleSchema.omit({ body: true });

/**
 * 投稿
 */
export type Article = z.infer<typeof articleSchema>;

/**
 * 投稿のアイテム
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
