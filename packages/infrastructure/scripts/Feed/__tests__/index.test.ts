import { RESPONSE } from '../__mocks__';
import { fetchFeedItems } from '..';

import { parser } from '../lib';

describe('Article/Feed', () => {
  const mockParseURL = vitest.spyOn(parser, 'parseURL');

  beforeEach(() => {
    mockParseURL.mockClear();
  });

  describe('fetchFeedItems', () => {
    describe('正常系', () => {
      beforeEach(() => {
        mockParseURL
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .mockImplementation(async () => RESPONSE as unknown as any);
      });

      test('レスポンスの Article の型を満たしているとき、データが返されるか', async () => {
        const response = await fetchFeedItems();

        expect(response).toEqual([
          {
            id: 'hammerspoon-switch-input-source',
            title: 'Hammerspoon で英数・かなの切り替えを行う',
            description:
              'はじめに\nUS配列のMacBook Proを利用しているのですがJIS配列と同じようにスペースキーの左右のキー（US配列では command キー）で入力ソース（英数・かな）の切り替えのために Hammerspoon を利用しているので設定と試したことをまとめる\n\n 前提\n\nmacOS Monterey 12.4 を利用\nターミナルのアプリケーションに kitty を利用\nHammerspoon, kitty のインストール方法は記載しない\n\n\n 1. 左右の command キーを押したときに、「英数キー」「かなキー」を押すイベントを実行する\nHammerspoon の設定ファイル...',
            permalink:
              'https://zenn.dev/ytk6565/articles/hammerspoon-switch-input-source',
            createdAt: '2022-06-16',
            updatedAt: '',
          },
        ]);
      });
    });

    describe('異常系', () => {
      beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mockParseURL.mockImplementation(async () => ({} as unknown as any));
      });

      test('レスポンスの Article の型を満たしていないとき、エラーがスローされるか', async () => {
        expect.hasAssertions();

        await expect(fetchFeedItems()).rejects.toThrow();
      });
    });
  });
});
