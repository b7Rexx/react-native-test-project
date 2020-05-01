import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './src/navigation';

import configStore from './configStore';
const store = configStore;

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation></DrawerNavigation>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
