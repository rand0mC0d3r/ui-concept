import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const DEFAULT_STATE = {
  theme: 'light',
  highlight: false,
  keyPress: false,
};

const reducer = (state, actions) => {
  switch (actions.type) {
  case 'theme':
    return { ...state, theme: actions.payload };
  case 'highlight':
    return { ...state, highlight: actions.payload };
  case 'keyPress':
    return { ...state, keyPress: actions.payload };
  default:
    return DEFAULT_STATE;
  }
};

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={useReducer(reducer, DEFAULT_STATE)}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
