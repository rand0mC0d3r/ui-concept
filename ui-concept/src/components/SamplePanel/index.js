import React from 'react';
import { Wrapper } from './styles.jsx';

import ThemeContext from './../../api/ThemeContext';

export default () => {

  return <ThemeContext.Consumer>
    {color => (
      <Wrapper tabIndex="4">
      x{color}
      </Wrapper>
    )}

  </ThemeContext.Consumer>;
};