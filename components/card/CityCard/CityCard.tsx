import React from 'react';

import { Box, Card, Heading, Text } from '@gluestack-ui/themed';

import { WeatherIcon } from '../../icon/WeatherIcon/WeatherIcon';

import { formatTemperature } from '../../../src/utils';
import { Day, Current, Location } from '../../../src/api/types';

export interface CityCardProps {
  location: Location;
  currentWeather: Current;
  dailyWeather: Day;
}

const CityCard = ({
  currentWeather,
  dailyWeather,
  location,
}: CityCardProps) => {
  const currentTemp = formatTemperature(currentWeather.feelslike_c);

  const maxTemp = formatTemperature(dailyWeather.maxtemp_c);
  const minTemp = formatTemperature(dailyWeather.mintemp_c);

  const realFeel = `${currentWeather.feelslike_c}°`;

  return (
    <Card
      alignItems="flex-start"
      flexDirection="column"
      size="md"
      variant="elevated">
      <Box width="100%" flexDirection="row" justifyContent="space-between">
        <Box flexDirection="column">
          <Heading mb="$1" size="md">
            {location.name}, {location.country}
          </Heading>
          <Heading mb="$1" size="3xl">
            {currentTemp}
          </Heading>
        </Box>
        <Box alignItems="center" justifyContent="center">
          <WeatherIcon icon={currentWeather.condition.icon} size="l" />
        </Box>
      </Box>
      <Box alignItems="center" flexDirection="row">
        <Box alignItems="center" flexDirection="column">
          <Text size="xs">
            <Text bold>
              {maxTemp}/{minTemp}
            </Text>{' '}
            Fells Like: <Text bold>{realFeel}</Text>
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

export { CityCard };
