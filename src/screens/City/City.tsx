import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Animated, Text, ScrollView, RefreshControl } from 'react-native';

import { RootStackParamList } from '../../navigation/routes';
import { api } from '../../api';
import { Forecastday } from '../../api/types';

import { CityCard } from '@components/card/CityCard/CityCard';
import { Box } from '@gluestack-ui/themed';
import { CircularLoading } from '@components/loading/CircularLoading/CircularLoading';
import styles from './styles';
import { ForecastList } from '@components/forecast/ForecastList/ForecastList';

const MIN_DAYS_FORECAST = 2;

interface CityProps {
  navigation: NavigationProp<RootStackParamList, 'City'>;
  route: RouteProp<RootStackParamList, 'City'>;
}

const City = (props: CityProps) => {
  const { location } = props.route.params;

  const slideAnim = useRef(new Animated.Value(-200)).current;

  const [isRefreshing, setIsRefreshing] = useState(false);

  const startCardAnimation = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ['forecast', location.name],
    queryFn: () =>
      api.getDailyForecast({
        cityName: location.name,
        days: MIN_DAYS_FORECAST,
      }),
    onSuccess: () => {
      startCardAnimation();
      setIsRefreshing(false);
    },
  });

  const getDailyForecastForCurrentDay = (forecast: Forecastday[]) =>
    forecast[0].day;

  const refreshWeather = () => {
    setIsRefreshing(true);
    refetch();
  };

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center">
        <CircularLoading color="orange" size="large" isLoading />
      </Box>
    );
  }

  if (!data || isError) {
    return (
      <Box flex={1}>
        <Text>Something went wrong</Text>
      </Box>
    );
  }

  const dailyForecast = getDailyForecastForCurrentDay(
    data.forecast.forecastday,
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshWeather} />
      }>
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
        }}>
        <Box m="$4">
          <CityCard
            location={data.location}
            dailyWeather={dailyForecast}
            currentWeather={data.current}
          />
        </Box>
      </Animated.View>
      <Box paddingHorizontal="$3">
        <ForecastList dailyForecasts={data.forecast.forecastday} />
      </Box>
    </ScrollView>
  );
};

export { City };
