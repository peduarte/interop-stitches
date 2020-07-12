import React, { useContext } from 'react';
import { styled } from '../../css';

const Context = React.createContext('');

export const Combobox = styled((props) => {
  const value = useContext(Context);
  const context = React.useState('');
  return (
    <Context.Provider value={context}>
      <styled.Box {...props} data-component-combobox />
    </Context.Provider>
  );
});

const ComboboxPanel = styled((props) => {
  const [value] = useContext(Context);

  return value ? (
    <styled.Box {...props} data-component-combobox-panel>
      {props.children}
    </styled.Box>
  ) : null;
});

const ComboboxInput = styled((props) => {
  const [value, setValue] = useContext(Context);
  return (
    <styled.Box
      {...props}
      as={props.as || 'input'}
      data-component-combobox-input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

const ComboboxMenuItem = styled((props) => {
  return <styled.Box {...props} data-component-combobox-menu-item />;
});

Combobox.Panel = ComboboxPanel;
Combobox.Input = ComboboxInput;
Combobox.MenuItem = ComboboxMenuItem;
