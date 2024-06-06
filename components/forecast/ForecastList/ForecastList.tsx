import React from 'react';
import { FlatList } from 'react-native';
import { SmallForecast } from '../SmallForecast/SmallForecast';
import { Forecastday } from '../../../src/api/types';
import { Card } from '@gluestack-ui/themed';

import { getForecastsFromTime } from '../../../src/utils';

interface ForecastListProps {
  dailyForecasts: Forecastday[];
}

const ForecastList = ({ dailyForecasts }: ForecastListProps) => {
  const currentTime = new Date().getHours();

  const hours = getForecastsFromTime(currentTime, dailyForecasts);

  return (
    <Card>
      <FlatList
        data={hours}
        renderItem={({ item: forecast }) => (
          <SmallForecast forecast={forecast} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Card>
  );
};

export { ForecastList };
