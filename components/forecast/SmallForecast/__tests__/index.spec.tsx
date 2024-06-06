import React from 'react';

import { SmallForecast } from '../SmallForecast';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@components/theme/Provider';

import * as mocks from './mocks';

describe('#smallForecast', () => {
  it('render current time', () => {
    const { getByText } = render(
      <ThemeProvider>
        <SmallForecast forecast={mocks.forecast} />,
      </ThemeProvider>,
    );

    expect(getByText(/10:00/)).toBeDefined();
  });

  it('render current temperature', () => {
    const { getByText } = render(
      <ThemeProvider>
        <SmallForecast forecast={mocks.forecast} />,
      </ThemeProvider>,
    );

    expect(getByText(/20°/)).toBeDefined();
  });
});
