import { render, screen } from '@testing-library/react';

import YTKHome from '@/components/pages/YTKHome';

describe('YTKHome', () => {
  it('renders headline', () => {
    render(<YTKHome articleItems={[]} />);

    expect(screen.getByText('Yutaka Kaneko'));
  });
});
