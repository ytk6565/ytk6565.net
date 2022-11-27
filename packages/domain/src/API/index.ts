import { Blog, getTitle } from '@/Blog';

/**
 * 記事の情報を取得する
 * @param id 記事の ID
 * @returns 記事の情報
 */
export const fetchPost = async (id: string): Promise<Blog> => {
  if (Math.random() > 0.5) {
    throw new Error('エラーが発生しました');
  }
  const post = {
    id,
    title: '記事のタイトル',
    content: '記事の本文',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };
  // eslint-disable-next-line no-console
  console.log(getTitle(post));
  return post;
};
