import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@components/theme/theme';

import { Router } from './src/screens/Router';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <Router />
    </GluestackUIProvider>
  );
}

export default App;
