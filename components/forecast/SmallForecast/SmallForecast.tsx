import React from 'react';

import { Box, Text } from '@gluestack-ui/themed';

import { Hour } from '../../../src/api/types';
import { WeatherIcon } from '@components/icon/WeatherIcon/WeatherIcon';

import { formatTemperature } from '../../../src/utils';

interface SmallForecastProps {
  forecast: Hour;
}

const SmallForecast = ({ forecast }: SmallForecastProps) => {
  const temperature = formatTemperature(forecast.temp_c);

  const currentHour = `${new Date(forecast.time).getHours()}:00`;

  return (
    <Box alignItems="center" justifyContent="center" height={100} width={50}>
      <Text>{currentHour}</Text>
      <Box marginVertical="$2">
        <WeatherIcon icon={forecast.condition.icon} size="s" />
      </Box>
      <Text>{temperature}</Text>
    </Box>
  );
};

export { SmallForecast };
