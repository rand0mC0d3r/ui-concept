import React from 'react';
import SamplePanel from '../../SamplePanel/index.js';

import { Wrapper, Container } from './styles.jsx';

import { ThemeProvider } from './../../../api/KeyboardContext';

// const MyCustomContext = React.createContext();

export default () => {
  // const [shiftPressed, setShiftPressed] = React.useState('tits');

  return <ThemeProvider>
    <Wrapper>
      <Container>
        <SamplePanel />
        <SamplePanel />
        <SamplePanel />
      </Container>
    </Wrapper>
  </ThemeProvider>
  ;
};