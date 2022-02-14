/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';

import {StateContext} from '../../Context/StateContext';
import Search from './Search';
import Loading from './Loading';
import Songs from './Songs/Songs';
import Error from './Error';

const MainContent = () => {
  const {state, setState} = useContext(StateContext);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          'https://xeno-canto.org/api/2/recordings',
          {
            params: {query: `loc:${state.inputValue}`},
          },
        );

        setState(prevState => ({
          ...prevState,
          isLoading: !prevState.isLoading,
          songs: response.data,
        }));
      } catch (err) {
        setState(prevState => ({
          ...prevState,
          isError: !prevState.isError,
        }));
      }
    };

    if (state.inputValue !== '') return fetchSongs();
  }, [state.inputValue]);

  return (
    <View style={styles.container}>
      {!state.isLoading && !state.songs ? (
        <Search />
      ) : !state.isLoading && state.songs ? (
        <Songs />
      ) : state.isError ? (
        <Error />
      ) : (
        <Loading />
      )}
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
