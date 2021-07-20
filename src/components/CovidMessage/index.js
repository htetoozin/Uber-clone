import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        modi distinctio minima corporis laborum neque totam numquam velit odit
        ducimus officia iure consequuntur incidunt, dolor id earum eaque quas
        esse.
      </Text>
      <Text style={styles.learMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
