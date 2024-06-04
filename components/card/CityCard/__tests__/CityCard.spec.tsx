import React from 'react';
import { render } from '@testing-library/react-native';

import { CityCard } from '../CityCard';

import * as mocks from './mocks';
import { ThemeProvider } from '@components/theme/Provider';

describe('#cityCard', () => {
  it('render city name', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CityCard location={mocks.location} weather={mocks.weather} />,
      </ThemeProvider>,
    );

    expect(getByText(/Hamburg/)).toBeDefined();
  });

  it('render country name', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CityCard location={mocks.location} weather={mocks.weather} />
      </ThemeProvider>,
    );
    expect(getByText(/Germany/)).toBeDefined();
  });
});
