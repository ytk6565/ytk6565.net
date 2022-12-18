process.env.CONTENTFUL_SPACE_ID = '123456';
process.env.CONTENTFUL_DELIVERY_TOKEN = 'xxxxxx';

import { fetchBlog, fetchBlogItems } from '..';
import { RESPONSE } from '../__mocks__';

import type { MockType } from '@@/tests/restHandlerFactory';

import { restHandlerFactory } from '@@/tests/restHandlerFactory';
import { setupMockServer } from '@@/tests/setupMockServer';

describe('Article/Blog', () => {
  describe('fetchBlog', () => {
    const server = setupMockServer();
    const fetchBlogHandler = restHandlerFactory(
      'get',
      '/spaces/:spaceId/entries/:id',
      (_req, res, ctx) => {
        return res(ctx.json({}));
      }
    );
    const fetchBlogResponseMock: MockType = vitest.fn();

    beforeEach(() => {
      fetchBlogResponseMock.mockClear();
    });

    describe('正常系', () => {
      beforeEach(() => {
        server.use(
          fetchBlogHandler({ data: RESPONSE, mock: fetchBlogResponseMock })
        );
      });

      test('リクエスト URL に Contentful の Space ID が含まれているか', async () => {
        await fetchBlog('001');

        const { url } = fetchBlogResponseMock.mock.calls[0][0];
        expect(url).toMatch(/spaces\/123456/);
      });

      test('リクエスト Headers に Contentful の Access Token が含まれているか', async () => {
        await fetchBlog('001');

        const { headers } = fetchBlogResponseMock.mock.calls[0][0];
        expect(headers.get('Authorization')).toBe('Bearer xxxxxx');
      });

      test('リクエスト URL に記事の ID が含まれているか', async () => {
        await fetchBlog('001');

        const { url } = fetchBlogResponseMock.mock.calls[0][0];
        expect(url).toMatch(/entries\/001/);
      });

      test('レスポンスの Article の型を満たしているとき、データが返されるか', async () => {
        const response = await fetchBlog('001');

        // TODO: 投稿アイテムのフォーマットが変わったらテストが落ちるので、データの取得と投稿アイテム型への変換のみをテストする
        expect(response).toEqual({
          id: '001',
          title: 'ブログのタイトル',
          description: 'ブログの説明',
          body: 'ブログの本文',
          permalink: '/articles/blogs/001',
          createdAt: '2022-11-29',
          updatedAt: '2022-11-29',
        });
      });
    });

    describe('異常系', () => {
      test('レスポンスの Article の型を満たしていないとき、エラーがスローされるか', async () => {
        server.use(fetchBlogHandler({ data: {}, mock: fetchBlogResponseMock }));

        expect.hasAssertions();

        await expect(fetchBlog('001')).rejects.toThrow();
      });
    });
  });

  describe('fetchBlogItems', () => {
    const server = setupMockServer();
    const fetchBlogItemsHandler = restHandlerFactory(
      'get',
      '/spaces/:spaceId/entries',
      (_req, res, ctx) => {
        return res(ctx.json({}));
      }
    );
    const fetchBlogItemsResponseMock: MockType = vitest.fn();

    beforeEach(() => {
      fetchBlogItemsResponseMock.mockClear();
    });

    describe('正常系', () => {
      beforeEach(() => {
        server.use(
          fetchBlogItemsHandler({
            data: { items: [RESPONSE] },
            mock: fetchBlogItemsResponseMock,
          })
        );
      });

      test('リクエスト URL に Contentful の Space ID が含まれているか', async () => {
        await fetchBlogItems();

        const { url } = fetchBlogItemsResponseMock.mock.calls[0][0];
        expect(url).toMatch(/spaces\/123456/);
      });

      test('リクエスト Headers に Contentful の Access Token が含まれているか', async () => {
        await fetchBlogItems();

        const { headers } = fetchBlogItemsResponseMock.mock.calls[0][0];
        expect(headers.get('Authorization')).toBe('Bearer xxxxxx');
      });

      test('レスポンスの Article の型を満たしているとき、データが返されるか', async () => {
        const response = await fetchBlogItems();

        // TODO: 投稿アイテムのフォーマットが変わったらテストが落ちるので、データの取得と投稿アイテム型への変換のみをテストする
        expect(response).toEqual([
          {
            id: '001',
            title: 'ブログのタイトル',
            description: 'ブログの説明',
            permalink: '/articles/blogs/001',
            createdAt: '2022-11-29',
            updatedAt: '2022-11-29',
          },
        ]);
      });
    });

    describe('異常系', () => {
      test('レスポンスの Article の型を満たしていないとき、エラーがスローされるか', async () => {
        server.use(
          fetchBlogItemsHandler({
            data: {},
            mock: fetchBlogItemsResponseMock,
          })
        );

        expect.hasAssertions();

        await expect(fetchBlogItems()).rejects.toThrow();
      });
    });
  });
});
