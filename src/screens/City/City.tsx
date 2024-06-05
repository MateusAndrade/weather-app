import { NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../navigation/routes';

interface CityProps {
  navigation: NavigationProp<RootStackParamList, 'City'>;
  route: RouteProp<RootStackParamList, 'City'>;
}

const City = (props: CityProps) => {
  const { location } = props.route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>City Screen</Text>
    </View>
  );
};

export { City };
