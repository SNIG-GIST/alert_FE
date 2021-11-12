import React from 'react';
import RootStackNavigator from './Navigation/RootStackNavigator.js';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
};

export default App;
