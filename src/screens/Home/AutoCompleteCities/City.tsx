import React from 'react';

import { Card, Text } from '@gluestack-ui/themed';
import { Location } from '@components/card/CityCard/types';
import { TouchableOpacity } from 'react-native';

interface CityProps {
  location: Location;
  onPress: () => void;
}

const City = ({ location, onPress }: CityProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        alignItems="center"
        flexDirection="row"
        size="md"
        height={50}
        width="100%">
        <Text>
          <Text bold>{location.name}</Text> - {location.country}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export { City };
