/* eslint-disable no-unused-vars */
import React from 'react';
import { Wrapper } from './styles.jsx';


import { useTheme } from '../../api/KeyboardContext';

export default ({children}) => {
  const [state] = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const [nowFocus, setNowFocus] = React.useState(false);

  React.useEffect(() => {
    if(isFocused) {
      setNowFocus(true);
    }
  }, [isFocused]);

  return <Wrapper
    onMouseOver={() => setIsFocused(true)}
    onMouseLeave={() => setIsFocused(false)}
    data-highlight={state.highlight}
  >
    {React.cloneElement(children, {keyboardFocus: isFocused})}
  </Wrapper>;
};