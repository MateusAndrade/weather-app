import React from 'react';
import { Image } from 'react-native';

interface WeatherIconProps {
  icon: string;
  size: 's' | 'm';
}

const iconSizes = {
  s: 32,
  m: 64,
};

const WeatherIcon = ({ icon, size = 'm' }: WeatherIconProps) => {
  const iconSize = iconSizes[size];

  return (
    <Image
      source={{
        uri: `https://${icon}`,
      }}
      height={iconSize}
      width={iconSize}
      testID="weather-icon"
    />
  );
};

export { WeatherIcon };
