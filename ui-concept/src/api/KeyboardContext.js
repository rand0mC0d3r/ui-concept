/* eslint-disable no-debugger */
import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const DEFAULT_STATE = {
  theme: 'light',
  highlight: false,
  keypressed: '0',
};

const reducer = (state, actions) => {
  console.log(actions);
  console.log(state);
  switch (actions.type) {
  case 'theme':
    return { ...state, theme: actions.payload };
  case 'highlight':
    return { ...state, highlight: actions.payload };
  case 'keypress':
    debugger;
    return { ...state, keypressed: actions.payload };
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
