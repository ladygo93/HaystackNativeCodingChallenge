import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {variables} from '../styles/variables';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bird songs</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: 400,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 64,
    fontFamily: variables.font,
  },
});
