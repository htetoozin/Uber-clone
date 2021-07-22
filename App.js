/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/HomeScreen/DestinationSearch';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  );
};

export default App;
