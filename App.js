import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Home/>
    </>
  );
}

export default App;