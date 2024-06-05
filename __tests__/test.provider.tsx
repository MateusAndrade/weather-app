import React, { ReactElement } from 'react';
import { ThemeProvider } from '../components/theme/Provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RenderOptions, render } from '@testing-library/react-native';

const Providers = ({
  children,
  queryClient,
}: {
  children: ReactElement;
  queryClient: QueryClient;
}) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

type RenderWithProvidersOptions = Omit<RenderOptions, 'queries'> & {
  queryClient?: QueryClient;
};

const renderWithProviders = (
  ui: ReactElement,
  options?: RenderWithProvidersOptions,
) => {
  const Wrapper = ({ children }: { children: ReactElement }) => (
    <Providers queryClient={options?.queryClient || new QueryClient()}>
      {children}
    </Providers>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export { renderWithProviders };
