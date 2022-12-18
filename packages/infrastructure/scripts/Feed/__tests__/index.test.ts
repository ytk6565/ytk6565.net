import { fetchFeedItems } from '..';
import { RESPONSE } from '../__mocks__';

import type { MockType } from '@@/tests/restHandlerFactory';

import { restHandlerFactory } from '@@/tests/restHandlerFactory';
import { setupMockServer } from '@@/tests/setupMockServer';

describe('Article/Feed', () => {
  describe('fetchFeedItems', () => {
    const server = setupMockServer();
    const fetchFeedItemsHandler = restHandlerFactory(
      'get',
      'https://zenn.dev/ytk6565/feed',
      (_req, res, ctx) => {
        return res(ctx.json({}));
      }
    );
    const fetchFeedItemsResponseMock: MockType = vitest.fn();

    beforeEach(() => {
      fetchFeedItemsResponseMock.mockClear();
    });

    // TODO: rss-parser の class を spyOn してテストを書く
    describe.skip('正常系', () => {
      beforeEach(() => {
        server.use(
          fetchFeedItemsHandler({
            data: { items: [RESPONSE] },
            mock: fetchFeedItemsResponseMock,
          })
        );
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
            createdAt: 'Wed, 15 Jun 2022 15:28:03 GMT',
            updatedAt: '',
          },
        ]);
      });
    });

    describe.skip('異常系', () => {
      test('レスポンスの Article の型を満たしていないとき、エラーがスローされるか', async () => {
        server.use(
          fetchFeedItemsHandler({
            data: {},
            mock: fetchFeedItemsResponseMock,
          })
        );

        expect.hasAssertions();

        await expect(fetchFeedItems()).rejects.toThrow();
      });
    });
  });
});
