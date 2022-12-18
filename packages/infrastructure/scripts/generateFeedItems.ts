import fs from 'fs-extra';

import { fetchFeedItems } from './Feed';

/**
 * Feed の記事を取得し JSON ファイルに保存す
 */
export const generateFeedItems = async () => {
  const feedItems = await fetchFeedItems();

  fs.ensureDirSync('./src/Article/Feed/');
  fs.writeJsonSync('./src/Article/Feed/index.json', feedItems);
};

generateFeedItems();
