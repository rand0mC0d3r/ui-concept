/* eslint-disable no-debugger */
import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';
import { useTheme } from '../../api/KeyboardContext';

// import { hookUseKeyPress } from './hookUseKeyPress';

// import ThemeContext from '../../api/KeyboardContext';







export default () => {
  // const [state, dispatcher] = useTheme();
  const [state, dispatcher] = useTheme();
  // Hook
  function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = React.useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      debugger;
      console.log('state.highlight', state.highlight);
      if (key === targetKey) {
        setKeyPressed(true);
        dispatcher({ type: 'highlight', payload: true });
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        dispatcher({ type: 'highlight', payload: false });
      }
    };

    // Add event listeners
    React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
  }
  // const bg = state.theme === 'light' ? '#ffffff' : '#000000';

  useKeyPress('Shift');

  // const { language, setLanguage } = useContext(LanguageContext);

  return <Wrapper >
    {/* {foxPress && '🦊'} */}
  </Wrapper>;

};