import React from 'react';
import { WeatherIcon } from '../../WeatherIcon';

import { render } from '@testing-library/react-native';

describe('#weatherIcon', () => {
  it('should render the weather icon', () => {
    const { getByTestId } = render(
      <WeatherIcon
        condition={{ icon: 'icon', text: 'some text', code: 123 }}
        size="s"
      />,
    );
    expect(getByTestId('weather-icon')).toBeDefined();
  });
});
