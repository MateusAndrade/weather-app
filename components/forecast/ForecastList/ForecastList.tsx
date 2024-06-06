import React from 'react';
import { FlatList } from 'react-native';
import { SmallForecast } from '../SmallForecast/SmallForecast';
import { Forecastday } from '../../../src/api/types';
import { Card } from '@gluestack-ui/themed';

interface ForecastListProps {
  dailyForecasts: Forecastday[];
}

const ForecastList = ({ dailyForecasts }: ForecastListProps) => {
  const dailyForecast = dailyForecasts[0];

  return (
    <Card>
      <FlatList
        data={dailyForecast.hour}
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
