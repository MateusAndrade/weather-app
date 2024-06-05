import React from 'react';

import { Router } from './src/navigation/Router';
import { ThemeProvider } from '@components/theme/Provider';
import { queryClient } from './src/api/client';
import { QueryClientProvider } from 'react-query';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
