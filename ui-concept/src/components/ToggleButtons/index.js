import React from 'react';
import { ButtonContainer } from './styles.jsx';

import Button from '@material-ui/core/Button';

export default () => {
  const items = [
    {
      id: 'A',
      label: 'A-text',
    },
    {
      id: 'B',
      label: 'B-text',
    },
    {
      id: 'C',
      label: 'C-text',
    },
  ];
  const [selection, setSelection] = React.useState('C');

  return <ButtonContainer>
    {items.map(item => <Button
      variant={item.id === selection ? 'contained' : 'outlined'}
      onClick={() => setSelection(item.id)}
    >
      {item.label}
    </Button>)}
  </ButtonContainer>;
};