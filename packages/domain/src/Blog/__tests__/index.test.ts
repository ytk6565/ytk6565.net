import { getTitle } from '..';

describe('getTitle', () => {
  it('should return title', () => {
    const blog = {
      id: 'id',
      title: 'title',
      content: 'content',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    };
    expect(getTitle(blog)).toBe('title');
  });
});
