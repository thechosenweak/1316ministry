import React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import RootStackNavigation from './navigations/RootStackNavigation';
import {enableScreens} from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux/store';
import LoadingScreen from './screens/LoadingScreen';

enableScreens();

function App() {

  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <PaperProvider>
          <RootStackNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
