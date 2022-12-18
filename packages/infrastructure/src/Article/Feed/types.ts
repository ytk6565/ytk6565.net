export type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

export type Feed = {
  items: FeedItem[];
};
