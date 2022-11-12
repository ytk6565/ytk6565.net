export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * タイトルを取得する
 * @param blog ブログ
 * @returns タイトル
 */
export const getTitle = (blog: Blog) => blog.title;
