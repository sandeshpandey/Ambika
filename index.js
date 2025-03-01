/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}


AppRegistry.registerComponent(appName, () => Main);
