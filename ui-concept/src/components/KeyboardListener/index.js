import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';

// import { hookUseKeyPress } from './hookUseKeyPress';

// import ThemeContext from '../../api/KeyboardContext';







export default () => {
  // const [state, dispatcher] = useTheme();

  // Hook
  function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = React.useState(false);

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
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

  const foxPress = useKeyPress('f');

  // const { language, setLanguage } = useContext(LanguageContext);

  return <Wrapper >

    {foxPress && '🦊'}
  </Wrapper>;

};