/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyledKey } from './styles.jsx';

import { useTheme } from '../../api/KeyboardContext';

export default ({shortcut, children}) => {
  const [state] = useTheme();

  return <StyledKey
    data-highlight={state.highlight}
    data-shortcut={shortcut}>
    {children}
  </StyledKey>;
};