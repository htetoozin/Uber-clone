import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/CovidMessage';

import HomeMap from '../../components/HomeMap';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />

      {/*  Bottom Component*/}
    </View>
  );
};

export default HomeScreen;
