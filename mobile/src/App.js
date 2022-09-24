import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import RootStackNavigation from './navigations/RootStackNavigation';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
    <Provider store={Store}>
      <RootStackNavigation />
    </Provider>
  );
};