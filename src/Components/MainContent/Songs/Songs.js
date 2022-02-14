import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {defaultState, StateContext} from '../../../Context/StateContext';
import Song from './Song';
import CustomBtn from '../../CustomBtn';
import {variables} from '../../../styles/variables';

const Songs = () => {
  const {state, setState} = useContext(StateContext);

  const pressHandler = () => {
    setState(defaultState);
  };

  return (
    <View style={styles.container}>
      {+state.songs.numRecordings > 0 ? (
        <>
          <Text style={[styles.subHeading, styles.capitalize]}>
            {state.inputValue}
            <Text style={styles.subHeading}>&apos;s top 5</Text>
          </Text>
          <View>
            {state.songs.recordings
              .slice(0, 5)
              .map(({id, gen, file}, index) => (
                <Song key={id} num={index + 1} name={gen} song={file} />
              ))}
          </View>
        </>
      ) : (
        <Text style={styles.noResultsMsg}>
          Sorry, we haven&apos;t found any songs by this location.
        </Text>
      )}

      <CustomBtn label="return" onPress={pressHandler} />
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
  },

  subHeading: {
    fontFamily: variables.font,
    lineHeight: 36,
    fontSize: 24,
    fontWeight: '700',
    color: variables.colorGrey,
    textTransform: 'lowercase',
  },

  capitalize: {
    textTransform: 'capitalize',
  },

  noResultsMsg: {
    fontFamily: variables.font,
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
  },
});
