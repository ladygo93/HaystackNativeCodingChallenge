import React, {useState, createRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-web';
import {useController} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {variables} from '../styles/variables';

const Input = ({name, control}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules: {
      required: 'This field is required!',
    },
  });

  const inputRef = createRef();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, isFocused ? styles.isFocused : {}]}>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => inputRef.current.focus()}
        />
      </View>
      <TextInput
        ref={inputRef}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        style={styles.input}
        value={field.value}
        onChangeText={field.onChange}
        placeholder="Start typing to search..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: variables.colorWhite,
    shadowColor: variables.shadowColor,
    shadowRadius: variables.shadowRadius,
    shadowOpacity: variables.shadowOpacity,
    shadowOffset: variables.shadowOffset,
    borderRadius: variables.borderRadius,
    border: `1.5px solid ${variables.colorWhite}`,
  },

  isFocused: {
    shadowColor: variables.colorBlue,
    border: `1.5px solid ${variables.colorBlue}`,
  },

  icon: {
    padding: 10,
  },

  input: {
    flex: 1,
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
    fontFamily: variables.font,
  },
});

export default Input;
