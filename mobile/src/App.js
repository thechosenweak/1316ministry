import * as React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux/store';
import RootStackNavigator from './navigations/RootStackNavigator';

enableScreens();

export default function App() {

  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <RootStackNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
