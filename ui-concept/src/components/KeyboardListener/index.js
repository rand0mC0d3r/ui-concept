import React from 'react';
import { useTheme } from '../../api/KeyboardContext';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatcher] = useTheme();

  function useKeyPress() {

    function downHandler({ key }) {
      if (key === 'Escape') {
        dispatcher({ type: 'highlight', payload: true });
      }
    }

    function pressHandler() {

    }

    const upHandler = ({ key }) => {
      if (key === 'Escape') {
        dispatcher({ type: 'highlight', payload: false });
      }
      dispatcher({ type: 'keypress', payload: key });
    };

    React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keypress', pressHandler);
      window.addEventListener('keyup', upHandler);
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keypress', pressHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []);

  }

  useKeyPress();

  return null;
};