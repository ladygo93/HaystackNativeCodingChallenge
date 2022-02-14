import React, {useState, createContext, useMemo} from 'react';

const StateContext = createContext();

const defaultState = {
  inputValue: '',
  songs: null,
  isLoading: false,
  isError: false,
};

const StateProvider = ({children}) => {
  const [state, setState] = useState(defaultState);

  const providerState = useMemo(() => ({state, setState}), [state, setState]);

  return (
    <StateContext.Provider value={providerState}>
      {children}
    </StateContext.Provider>
  );
};

export {StateContext, StateProvider, defaultState};
