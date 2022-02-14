import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {variables} from '../styles/variables';

const CustomBtn = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    width: '100%',
    backgroundColor: variables.colorBlue,
    borderRadius: variables.borderRadius,
  },

  text: {
    textAlign: 'center',
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
    color: variables.colorWhite,
    padding: 8,
    textTransform: 'capitalize',
    fontFamily: variables.font,
  },
});
