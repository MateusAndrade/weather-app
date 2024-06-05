import React from 'react';

import { Box, Text, View } from '@gluestack-ui/themed';

import { AutoCompleteCities } from './AutoCompleteCities/AutoCompleteCities';

import styles from './styles';
import { Location } from '@components/card/CityCard/types';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Routes } from '../../navigation/routes';
import { Image } from 'react-native';

interface HomeProps {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  const onSelectLocation = (location: Location) => {
    navigation.navigate(Routes.City, { location });
  };

  return (
    <View style={styles.container}>
      <Box position="absolute" width="100%" zIndex={1} ml="$4" mt="$4">
        <AutoCompleteCities onSelectLocation={onSelectLocation} />
      </Box>
      <Box>
        <Image
          style={styles.welcomeImage}
          source={require('../../../assets/illustrations/weather.png')}
          resizeMode="contain"
        />
        <Text textAlign="center">Welcome to the Weather app!</Text>
      </Box>
    </View>
  );
};

export { Home };
