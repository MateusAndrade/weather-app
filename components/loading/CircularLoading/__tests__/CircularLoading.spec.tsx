import React from 'react';

import { CircularLoading } from '../CircularLoading';

import { ThemeProvider } from '@components/theme/Provider';
import { render } from '@testing-library/react-native';

describe('#circularLoading', () => {
  it('render loading indicator when isLoading is true', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CircularLoading isLoading />
      </ThemeProvider>,
    );

    expect(getByTestId('circular-loading')).toBeDefined();
  });

  it('dont render loading indicator when isLoading is false', () => {
    const { queryByTestId } = render(
      <ThemeProvider>
        <CircularLoading isLoading={false} />
      </ThemeProvider>,
    );

    expect(queryByTestId('circular-loading')).toBeNull();
  });
});
