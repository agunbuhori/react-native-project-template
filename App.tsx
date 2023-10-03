/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ThemeProvider from '@/contexts/ThemeContext';
import RootStackNavigation from '@/navigations/root-stack';
import {store} from '@/store';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import ModalProvider from '@/contexts/ModalContext';
import AuthProvider from '@/contexts/AuthContext';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <ModalProvider>
            <RootStackNavigation />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
