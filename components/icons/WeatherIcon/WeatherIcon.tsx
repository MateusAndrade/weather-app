import React from 'react';
import { Condition } from '@components/card/CityCard/types';
import { Image } from 'react-native';

interface WeatherIconProps {
  condition: Condition;
  size: 's' | 'm';
}

const iconSizes = {
  s: 32,
  m: 64,
};

const WeatherIcon = ({ condition, size = 'm' }: WeatherIconProps) => {
  const iconSize = iconSizes[size];

  return (
    <Image
      source={{
        uri: `https://${condition.icon}`,
      }}
      height={iconSize}
      width={iconSize}
      testID="weather-icon"
    />
  );
};

export { WeatherIcon };
