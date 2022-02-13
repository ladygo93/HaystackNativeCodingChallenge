import {StyleSheet, View} from 'react-native';
import React from 'react';
import Search from './Search';

const MainContent = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: 400,
    alignSelf: 'center',
  },
});
