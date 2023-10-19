import { render, screen } from '@testing-library/react';

import { Home } from '..';

const makeSut = () => {
  const sut = render(<Home />);
  return { sut };
};

describe('Render HomePage items', () => {
  it('should render homepage components', () => {
    const { sut } = makeSut();

    const imageItem = sut.getByTestId('logo-img-id');

    expect(imageItem).toBeInTheDocument();
  });
});
