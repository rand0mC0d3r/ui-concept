import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';


import { useTheme } from '../../api/KeyboardContext';
// import ThemeContext from '../../api/KeyboardContext';

export default () => {
  const [state] = useTheme();
  // const bg = state.theme === 'light' ? '#ffffff' : '#000000';

  // const { language, setLanguage } = useContext(LanguageContext);

  return <Wrapper tabIndex="4">
      x {state.theme}
  </Wrapper>;

};