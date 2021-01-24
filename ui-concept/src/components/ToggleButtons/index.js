/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ButtonContainer } from './styles.jsx';
import Switch from '@material-ui/core/Switch';

import Button from '@material-ui/core/Button';

import { useTheme } from '../../api/KeyboardContext';

export default ({keyboardFocus = false}) => {
  const [state] = useTheme();
  const [selection, setSelection] = React.useState('C');
  const [toggled, setToggled] = React.useState(false);
  const [keyboardKeys, setKeyboardKeys] = React.useState(['1','2','3']);
  const items = [
    { id: 'A', label: 'A-text', keyTrigger: '1' },
    { id: 'B', label: 'B-text', keyTrigger: '2' },
    { id: 'C', label: 'C-text', keyTrigger: '3' },
  ];

  React.useEffect(() => {
    if(keyboardFocus) {
      debugger;
      console.log(state.keypressed);
      if(state.keypressed === ' ') {
        handleOnChange();
      }
      if(keyboardKeys.includes(state.keypressed)) {
        setSelection(...items
          .filter(item => item.keyTrigger === state.keypressed)
          .map(item => item.id));
      }
    }
  }, [state]);

  const handleOnChange = () => {
    setToggled(!toggled);
  };

  return <ButtonContainer>

    <Switch
      checked={toggled}
      onChange={handleOnChange}
      name="checkedA"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />

    {items.map(item => <Button
      key={item.id}
      variant={item.id === selection ? 'contained' : 'outlined'}
      onClick={() => setSelection(item.id)}
    >
      {item.label}
    </Button>)}
  </ButtonContainer>;
};