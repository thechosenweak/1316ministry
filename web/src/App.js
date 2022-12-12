import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './Redux/store';
import AppRoutes from './Routes';
import AppProvider from './Routes/AppProvider';
import './Assets/styles/main.scss';

export default function App() {
  const { store, persistor } = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </Router>
      </PersistGate>
    </Provider>
  )
}