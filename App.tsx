/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {AppNavigators} from './navigators/AppNavigators';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
      <QueryClientProvider client={queryClient}>
        <AppNavigators />
      </QueryClientProvider>
    </ApplicationProvider>
  );
}

export default App;
