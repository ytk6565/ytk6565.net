import { Blog } from '@ytk6565.net/domain/dist/Blog';
import { useState } from 'react';

export const useBlog = () => {
  const [blog, setBlog] = useState<Blog>();

  return {
    blog,
    setBlog,
  };
};
