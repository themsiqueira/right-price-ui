import { render, screen } from '@testing-library/react';

import { Home } from '..';

// const makescreen = () => {
//   const screen = render(<Home />);
//   return { screen };
// };

describe('Render HomePage items', () => {
  it('should render homepage components', () => {
    render(<Home />);

    const imageItem = screen.getByTestId('logo-img-id');
    const inputId = screen.getByTestId('navbar-main');
    const mainTitle = screen.getByText('Preço Certo');

    expect(imageItem).toBeInTheDocument();
    expect(inputId).toBeInTheDocument();
    expect(mainTitle).toBeInTheDocument();
  });
});
