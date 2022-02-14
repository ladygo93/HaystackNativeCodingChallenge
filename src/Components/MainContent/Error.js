import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import CustomBtn from '../CustomBtn';
import {StateContext, defaultState} from '../../Context/StateContext';
import {variables} from '../../styles/variables';

const Error = () => {
  const {setState} = useContext(StateContext);

  const handlePress = () => {
    setState(defaultState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Something went wrong, please try again or comeback later !!!
      </Text>
      <CustomBtn label="Return" onPress={handlePress} />
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flex: 1,
  },

  text: {
    fontFamily: variables.font,
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
  },
});
