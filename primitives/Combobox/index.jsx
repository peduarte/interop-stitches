import React, { useContext } from 'react';

const Context = React.createContext('');

export const Combobox = ({ as: Component = 'div', ...props }) => {
  const value = useContext(Context);
  const context = React.useState('');
  return (
    <Context.Provider value={context}>
      <Component {...props} data-component-combobox />
    </Context.Provider>
  );
};

const ComboboxPanel = ({ as: Component = 'div', ...props }) => {
  const [value] = useContext(Context);

  return value ? (
    <Component {...props} data-component-combobox-panel>
      {props.children}
    </Component>
  ) : null;
};

const ComboboxInput = ({ as: Component = 'input', ...props }) => {
  const [value, setValue] = useContext(Context);
  return (
    <Component
      {...props}
      data-component-combobox-input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const ComboboxMenuItem = ({ as: Component = 'div', ...props }) => {
  return <Component {...props} data-component-combobox-menu-item />;
};

Combobox.Panel = ComboboxPanel;
Combobox.Input = ComboboxInput;
Combobox.MenuItem = ComboboxMenuItem;

export const styles = {
  combobox: {},
  panel: {},
  input: {},
};
