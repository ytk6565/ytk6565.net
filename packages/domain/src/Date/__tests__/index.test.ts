import { toJST, FORMAT_PATTERNS } from '..';

describe('Date', () => {
  describe('toJST', () => {
    test.each([
      {
        date: '2022-11-29T17:02:43.120Z',
        format: undefined,
        expected: '2022-11-30',
      },
      {
        date: 'Wed, 15 Jun 2022 15:28:03 GMT',
        format: undefined,
        expected: '2022-06-16',
      },
      {
        date: '2022-11-29T17:02:43.120Z',
        format: FORMAT_PATTERNS.DATETIME,
        expected: '2022-11-30 02:02:43',
      },
      {
        date: 'Wed, 15 Jun 2022 15:28:03 GMT',
        format: FORMAT_PATTERNS.DATETIME,
        expected: '2022-06-16 00:28:03',
      },
    ])('%s', ({ date, format, expected }) => {
      expect(toJST(date, format)).toBe(expected);
    });
  });
});