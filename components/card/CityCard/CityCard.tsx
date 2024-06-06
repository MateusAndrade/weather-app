import React, { useEffect, useRef } from 'react';

import { Animated, Easing } from 'react-native';
import { Box, Card, Heading, Text } from '@gluestack-ui/themed';

import { WeatherIcon } from '../../icon/WeatherIcon/WeatherIcon';

import { formatTemperature } from '../../../src/utils';
import { Day, Current, Location } from '../../../src/api/types';
import styles from './styles';

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
  const iconAnimation = useRef(new Animated.Value(0)).current;

  const currentTemp = formatTemperature(currentWeather.feelslike_c);

  const maxTemp = formatTemperature(dailyWeather.maxtemp_c);
  const minTemp = formatTemperature(dailyWeather.mintemp_c);

  const realFeel = formatTemperature(currentWeather.feelslike_c);

  const condition = dailyWeather.condition.text;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(iconAnimation, {
          toValue: 5,
          duration: 500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(iconAnimation, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();
  }, [iconAnimation]);

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
          <Box mb="$5">
            <Text>{condition}</Text>
          </Box>
        </Box>
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [
                { translateY: iconAnimation },
                { translateX: iconAnimation },
              ],
            },
          ]}>
          <WeatherIcon icon={currentWeather.condition.icon} size="l" />
        </Animated.View>
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
