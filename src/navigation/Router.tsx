import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { City } from '../screens/City/City';
import { Home } from '../screens/Home/Home';

import { Routes } from './routes';

import { SunIcon } from '@components/icon/SunIcon/SunIcon';

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={() => ({
          headerTitle: () => <SunIcon />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name={Routes.City}
        component={City}
        options={({ route }) => ({ title: route?.params?.location?.name })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export { Router };
