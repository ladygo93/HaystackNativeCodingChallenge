import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Image} from 'react-native-web';

import {StateProvider} from './Context/StateContext';
import logo from './assets/logo.png';
import Header from './Components/Header';
import MainContent from './Components/MainContent/MainContent';

import {variables} from './styles/variables';

const App = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <Header />
      <StateProvider>
        <MainContent />
      </StateProvider>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    backgroundColor: variables.bgColor,
    flex: 1,
  },

  logo: {
    height: 185,
    width: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default App;
