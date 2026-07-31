import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
import { NetworkProvider } from './NetworkProvider';
import { LanguageProvider } from './LanguageProvider';
import { BusinessProvider } from './BusinessProvider';
import { InventoryProvider } from './InventoryProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="biztrack-ui-theme">
        <LanguageProvider>
          <AuthProvider>
            <NetworkProvider>
              <BusinessProvider>
                <InventoryProvider>{children}</InventoryProvider>
              </BusinessProvider>
            </NetworkProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
