import { render, screen } from '@testing-library/react';

import Home from '@/components/pages/YTKHome';

describe('Home', () => {
  it('renders headline', () => {
    render(<Home />);

    expect(screen.getByText('Yutaka Kaneko'));
  });
});
