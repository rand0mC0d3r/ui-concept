/* eslint-disable no-unused-vars */
import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';


import { useTheme } from '../../api/KeyboardContext';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import ThemeContext from '../../api/KeyboardContext';

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
    {isFocused ? 'yes' : 'no'}
    {/* {children} */}
    {React.cloneElement(children, {keyboardFocus: isFocused})}
  </Wrapper>;
};