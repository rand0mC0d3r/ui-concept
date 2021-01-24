import React from 'react';
import SamplePanel from '../../SamplePanel/index.js';

import { Wrapper, Container } from './styles.jsx';

import { ThemeProvider } from './../../../api/KeyboardContext';
import KeyboardListener from '../../KeyboardListener/index.js';
import ToggleButtons from '../../ToggleButtons/index.js';

export default () => {
  return <ThemeProvider>
    <Wrapper>

      <Container>
        <KeyboardListener />
        <SamplePanel >
          <ToggleButtons />
        </SamplePanel>
        <SamplePanel />
        <SamplePanel />
      </Container>
    </Wrapper>
  </ThemeProvider>
  ;
};