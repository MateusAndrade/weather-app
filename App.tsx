import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from '@components/theme/theme';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Text>Test</Text>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
