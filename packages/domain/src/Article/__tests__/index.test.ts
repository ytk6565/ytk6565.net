import { formatArticle, formatArticleItem } from '..';

describe('Article', () => {
  describe('formatArticle', () => {
    test.each([
      {
        article: {
          id: 'hammerspoon-switch-input-source',
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          description:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
          body: 'ブログの本文',
          permalink:
            'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          createdAt: 'Wed, 15 Jun 2022 15:28:03 GMT',
          updatedAt: '',
        },
        expected: {
          id: 'hammerspoon-switch-input-source',
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          description:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
          body: 'ブログの本文',
          permalink:
            'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          createdAt: '2022-06-16',
          updatedAt: '',
        },
      },
      {
        article: {
          id: '001',
          title: 'ブログのタイトル',
          description: 'ブログの説明',
          body: 'ブログの本文',
          permalink: '/articles/blogs/001',
          createdAt: '2022-11-29T12:34:56.120Z',
          updatedAt: '2022-11-29T12:34:56.120Z',
        },
        expected: {
          id: '001',
          title: 'ブログのタイトル',
          description: 'ブログの説明',
          body: 'ブログの本文',
          permalink: '/articles/blogs/001',
          createdAt: '2022-11-29',
          updatedAt: '2022-11-29',
        },
      },
    ])('Article 型がフォーマットされること', ({ article, expected }) => {
      const result = formatArticle(article);
      expect(result).toEqual(expected);
    });
  });

  describe('formatArticleItem', () => {
    test.each([
      {
        articleItem: {
          id: 'hammerspoon-switch-input-source',
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          description:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
          permalink:
            'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          createdAt: 'Wed, 15 Jun 2022 15:28:03 GMT',
          updatedAt: '',
        },
        expected: {
          id: 'hammerspoon-switch-input-source',
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          description:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Ham...',
          permalink:
            'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          createdAt: '2022-06-16',
          updatedAt: '',
        },
      },
      {
        articleItem: {
          id: '001',
          title: 'ブログのタイトル',
          description: 'ブログの説明',
          permalink: '/articles/blogs/001',
          createdAt: '2022-11-29T12:34:56.120Z',
          updatedAt: '2022-11-29T12:34:56.120Z',
        },
        expected: {
          id: '001',
          title: 'ブログのタイトル',
          description: 'ブログの説明',
          permalink: '/articles/blogs/001',
          createdAt: '2022-11-29',
          updatedAt: '2022-11-29',
        },
      },
    ])(
      'ArticleItem 型がフォーマットされること',
      ({ articleItem, expected }) => {
        const result = formatArticleItem(articleItem);
        expect(result).toEqual(expected);
      }
    );
  });
});
