import React from 'react';

import { AutoCompleteCities } from '../AutoCompleteCities';

import { userEvent } from '@testing-library/react-native';
import { renderWithProviders } from '@tests/test.provider';
import { QueryClient } from 'react-query';
import { cityMocks } from './mocks';

describe('#autoCompleteCities', () => {
  const onSelectLocation = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  describe('when the user is searching for a city called Hamburg, and the user selects one item', () => {
    it('render a list with Hamburg', async () => {
      const queryClient = new QueryClient();

      queryClient.setQueryData(
        ['autoCompleteCities', 'Hamburg'],
        [cityMocks[0]],
      );

      const { getByText, getByPlaceholderText } = renderWithProviders(
        <AutoCompleteCities onSelectLocation={onSelectLocation} />,
        { queryClient },
      );

      const user = userEvent.setup();

      await user.type(
        getByPlaceholderText('Search for a city or postal code'),
        'Hamburg',
      );

      await user.press(getByText('Hamburg'));

      expect(onSelectLocation).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the user is searching for a city called Hamburg, and the API retunrs two items', () => {
    it('render a list with Hamburg', async () => {
      const queryClient = new QueryClient();

      queryClient.setQueryData(['autoCompleteCities', 'Hamburg'], cityMocks);

      const { getAllByText, getByPlaceholderText } = renderWithProviders(
        <AutoCompleteCities onSelectLocation={onSelectLocation} />,
        { queryClient },
      );

      const user = userEvent.setup();

      await user.type(
        getByPlaceholderText('Search for a city or postal code'),
        'Hamburg',
      );

      const cities = getAllByText(/Hamburg/);

      expect(cities[0]).toHaveTextContent('Hamburg');
    });
  });

  describe('when the user is searching for a city called Atlantis, and the API retunrs a empty list', () => {
    it('render a list with Hamburg', async () => {
      const queryClient = new QueryClient();

      queryClient.setQueryData(['autoCompleteCities', 'Hamburg'], []);

      const { queryByText, getByPlaceholderText } = renderWithProviders(
        <AutoCompleteCities onSelectLocation={onSelectLocation} />,
        { queryClient },
      );

      const user = userEvent.setup();

      await user.type(
        getByPlaceholderText('Search for a city or postal code'),
        'Atlantis',
      );

      expect(queryByText(/Atlantis/)).toBeNull();
      expect(
        queryByText("We didn't find any city for this search :("),
      ).toBeDefined();
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
