import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { config } from './theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;

export { ThemeProvider };
