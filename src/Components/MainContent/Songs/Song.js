import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVolumeOff, faVolumeHigh} from '@fortawesome/free-solid-svg-icons';

import {variables} from '../../../styles/variables';

const Song = ({num, name, song}) => {
  const [play, setPlay] = useState(false);

  const [audio] = useState(new Audio(song));

  useEffect(() => {
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}.</Text>
      <Text style={[styles.text, styles.name]}>{name}</Text>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={play ? faVolumeHigh : faVolumeOff}
          onClick={() => setPlay(!play)}
        />
      </View>
    </View>
  );
};

export default Song;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 8,
    border: '1px solid #fff',
    backgroundColor: variables.colorWhite,
    borderRadius: variables.borderRadius,
    shadowColor: variables.shadowColor,
    shadowOpacity: variables.shadowOpacity,
    shadowRadius: variables.shadowRadius,
    shadowOffset: variables.shadowOffset,
  },

  text: {
    fontFamily: variables.font,
    fontSize: variables.mainFontSize,
    lineHeight: variables.mainLineHeight,
    paddingLeft: 5,
  },

  name: {
    flex: 1,
  },

  iconContainer: {
    justifyContent: 'center',
    marginRight: 5,
  },
});
