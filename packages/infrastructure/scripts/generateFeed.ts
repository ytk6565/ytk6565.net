import fs from 'fs-extra';

import { fetchFeed } from './Feed';

/**
 * Feed の記事を取得し JSON ファイルに保存す
 */
export const generateFeed = async () => {
  const feedItems = await fetchFeed();

  fs.ensureDirSync('./src/Article/Feed/');
  fs.writeJsonSync('./src/Article/Feed/index.json', feedItems);
};

generateFeed();
