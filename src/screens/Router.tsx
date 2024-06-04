import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { City } from './City/City';
import { Home } from './Home/Home';

import { Routes } from './routes';

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.City} component={City} />
    </Stack.Navigator>
  </NavigationContainer>
);

export { Router };
