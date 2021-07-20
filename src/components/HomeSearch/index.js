import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = () => {
  return (
    <View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>
      {/* Previous destination */}
      {/* Home destination  */}
    </View>
  );
};

export default HomeSearch;
