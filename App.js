import React from 'react';
import Main from './src/main';
import { Provider } from 'react-redux';

import configStore from './configStore';

const store = configStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
};

export default App;
