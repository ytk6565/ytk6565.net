import { trim } from '..';

describe('String', () => {
  describe('trim', () => {
    test.each([
      {
        str: '1234567890',
        length: 10,
        expected: '1234567890',
      },
      {
        str: '1234567890',
        length: 9,
        expected: '123456789...',
      },
    ])('%s', ({ str, length, expected }) => {
      expect(trim(str, length)).toBe(expected);
    });
  });
});
