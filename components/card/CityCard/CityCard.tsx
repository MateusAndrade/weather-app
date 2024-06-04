import React from 'react';

import { Box, Card, Heading, Text } from '@gluestack-ui/themed';

import { WeatherIcon } from '../../icon/WeatherIcon/WeatherIcon';

import { Location, Weather } from './types';
import { Pressable } from 'react-native';

export interface CityCardProps {
  location: Location;
  weather: Weather;
}

const CityCard = ({ weather, location }: CityCardProps) => {
  // @todo: add locale to check for temperature unit in celcius or fahrenheit
  const currentTemp = `${weather.temp_c}°`;
  const realFeel = `${weather.feelslike_c}°`;

  const onPress = () => {
    console.log('Pressed');
  };

  return (
    <Pressable onPress={onPress}>
      <Card
        alignItems="center"
        flexDirection="row"
        size="md"
        variant="elevated"
        m="$3"
        justifyContent="space-between"
        height={80}>
        <Heading mb="$1" size="sm">
          {location.name}, {location.country}
        </Heading>
        <Box alignItems="center" flexDirection="row">
          <Box mr="$3">
            <WeatherIcon condition={weather.condition} size="s" />
          </Box>
          <Box alignItems="center" flexDirection="column">
            <Text bold size="lg">
              {currentTemp}
            </Text>
            <Text size="xs">
              Fells Like: <Text bold>{realFeel}</Text>
            </Text>
          </Box>
        </Box>
      </Card>
    </Pressable>
  );
};

export { CityCard };
