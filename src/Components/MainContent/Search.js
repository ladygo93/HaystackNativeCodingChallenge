import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

import {StateContext} from '../../Context/StateContext';
import CustomBtn from '../CustomBtn';
import Input from '../Input';

import {variables} from '../../styles/variables';

const Search = () => {
  const {setState} = useContext(StateContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    setState(prevState => ({
      ...prevState,
      inputValue: data.location,
      isLoading: !prevState.isLoading,
    }));
  };

  return (
    <View>
      <Text style={styles.text}>Enter a location</Text>
      <Input control={control} name="location" />
      <ErrorMessage
        errors={errors}
        name="location"
        render={({message}) => <Text style={styles.error}>{message}</Text>}
      />
      <CustomBtn label="retrieve top 5" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  text: {
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
    fontFamily: variables.font,
  },

  error: {
    color: 'red',
    textAlign: 'right',
    fontFamily: variables.font,
  },
});
