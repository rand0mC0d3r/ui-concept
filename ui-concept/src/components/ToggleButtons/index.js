/* eslint-disable no-unused-vars */
import React from 'react';
import { ButtonContainer } from './styles.jsx';

import Button from '@material-ui/core/Button';

import { useTheme } from '../../api/KeyboardContext';

export default () => {
  const [state] = useTheme();
  const [selection, setSelection] = React.useState('C');
  const [keyboardKeys, setKeyboardKeys] = React.useState(['1','2','3']);
  const items = [
    { id: 'A', label: 'A-text', keyTrigger: '1' },
    { id: 'B', label: 'B-text', keyTrigger: '2' },
    { id: 'C', label: 'C-text', keyTrigger: '3' },
  ];

  React.useEffect(() => {
    if(keyboardKeys.includes(state.keyPress)) {
      setSelection(...items
        .filter(item => item.keyTrigger === state.keyPress)
        .map(item => item.id));
      console.log(selection);
    }


  }, [state]);


  return <ButtonContainer>
    {items.map(item => <Button
      key={item.id}
      variant={item.id === selection ? 'contained' : 'outlined'}
      onClick={() => setSelection(item.id)}
    >
      {item.label}
    </Button>)}
  </ButtonContainer>;
};