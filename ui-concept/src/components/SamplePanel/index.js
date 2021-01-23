import React from 'react';
// import React, { useContext } from 'react';
import { Wrapper } from './styles.jsx';


import { useTheme } from '../../api/KeyboardContext';
import TextField from '@material-ui/core/TextField';
// import ThemeContext from '../../api/KeyboardContext';

export default () => {
  const [state, dispatcher] = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const [nowFocus, setNowFocus] = React.useState(false);

  React.useEffect(() => {
    if(isFocused) {
      setTimeout(() => {
        console.log('trigger Autofocus');
        setNowFocus(true);
      }, 1000);
    }
  }, [isFocused]);

  return <Wrapper
    onMouseOver={() => setIsFocused(true)}
    onMouseLeave={() => setIsFocused(false)}
    data-highlight={state.highlight}

  >
    {isFocused ? 'yes' : 'no'}

    {/* <TextField autoFocus={nowFocus} type="text" /> */}

    <TextField autoFocus={nowFocus} id="standard-basic" label="Standard" />

    <button
      onClick={() => {
        dispatcher({ type: 'highlight', payload: !state.highlight });
      }}
    >
      change
    </button>


  </Wrapper>;

};