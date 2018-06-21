import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store/conigureStore';

import App from './App';

const store = configureStore();

const appRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('reactnativecameramap', () => appRedux);
