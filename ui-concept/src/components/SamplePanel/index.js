import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';


import { useTheme } from '../../api/KeyboardContext';
// import ThemeContext from '../../api/KeyboardContext';

export default () => {
  const [state, dispatcher] = useTheme();
  // const bg = state.theme === 'light' ? '#ffffff' : '#000000';

  // const { language, setLanguage } = useContext(LanguageContext);

  return <Wrapper data-highlight={state.highlight}>
      x {state.theme}

    {state.highlight ? 'fsfsd' : 'sdfdsfs'}

    <button
      onClick={() => {
        dispatcher({ type: 'highlight', payload: !state.highlight });
      }}
    >
      change
    </button>


  </Wrapper>;

};