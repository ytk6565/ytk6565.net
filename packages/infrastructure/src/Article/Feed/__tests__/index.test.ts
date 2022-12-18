import { toArticleItem } from '..';

describe('Article/Feed', () => {
  describe('toArticleItem', () => {
    describe('正常系', () => {
      test('レスポンスの Article の型を満たしているとき、データが返されるか', async () => {
        const result = toArticleItem({
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          link: 'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          pubDate: 'Wed, 15 Jun 2022 15:28:03 GMT',
          contentSnippet:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
        });

        expect(result).toEqual({
          id: 'hammerspoon-switch-input-source',
          title: 'Hammerspoon で英数・かなの切り替えを行う',
          description:
            'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
          permalink:
            'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
          createdAt: 'Wed, 15 Jun 2022 15:28:03 GMT',
          updatedAt: '',
        });
      });
    });
  });
});
