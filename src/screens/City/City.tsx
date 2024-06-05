import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { Animated, Text } from 'react-native';

import { RootStackParamList } from '../../navigation/routes';
import { api } from '../../api';

import { CityCard } from '@components/card/CityCard/CityCard';
import { Box } from '@gluestack-ui/themed';
import { CircularLoading } from '@components/loading/CircularLoading/CircularLoading';

interface CityProps {
  navigation: NavigationProp<RootStackParamList, 'City'>;
  route: RouteProp<RootStackParamList, 'City'>;
}

const City = (props: CityProps) => {
  const { location } = props.route.params;

  const slideAnim = useRef(new Animated.Value(-200)).current;

  const startCardAnimation = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const { data, isLoading } = useQuery({
    queryKey: ['forecast', location.name],
    queryFn: () => api.getDailyForecast({ cityName: location.name, days: 1 }),
    onSuccess: () => startCardAnimation(),
  });

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center">
        <CircularLoading color="orange" size="large" isLoading />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box flex={1}>
        <Text>Something went wrong</Text>
      </Box>
    );
  }

  return (
    <Animated.View
      style={{
        transform: [{ translateY: slideAnim }],
      }}>
      <Box flex={1}>
        <CityCard location={data.location} weather={data.current} />
      </Box>
    </Animated.View>
  );
};

export { City };
