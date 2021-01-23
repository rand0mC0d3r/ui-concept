import React from 'react';
import SamplePanel from '../../SamplePanel/index.js';

import { Wrapper, Container } from './styles.jsx';

export default () => {

  return <Wrapper>
    <Container>
      <SamplePanel />
      <SamplePanel />
      <SamplePanel />
    </Container>
  </Wrapper>;
};