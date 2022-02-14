import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import {defaultState, StateContext} from '../../Context/StateContext';
import CustomBtn from '../CustomBtn';

import {variables} from '../../styles/variables';

const Loading = () => {
  const {setState} = useContext(StateContext);

  const pressHandler = () => {
    setState(defaultState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please wait while we are processing your request!
      </Text>
      <ActivityIndicator size="large" color={variables.colorBlue} />
      <CustomBtn label="Return" onPress={pressHandler} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 35,
  },

  text: {
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
    fontFamily: variables.font,
  },
});
