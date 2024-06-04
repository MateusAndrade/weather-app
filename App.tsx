import React from 'react';

import { Router } from './src/screens/Router';
import { ThemeProvider } from '@components/theme/Provider';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
