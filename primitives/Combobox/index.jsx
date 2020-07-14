import React, { useContext } from 'react';
import { Box } from 'react-polymorphic-box';

const Context = React.createContext('');

export const Combobox = ({ compose: Component = Box, as = 'div', ...props }) => {
  const value = useContext(Context);
  const context = React.useState('');
  return (
    <Context.Provider value={context}>
      <Component {...props} as={as} data-component-combobox />
    </Context.Provider>
  );
};

Combobox.Panel = ({ compose: Component = Box, as = 'div', ...props }) => {
  const [value] = useContext(Context);

  return value ? (
    <Component {...props} as={as} data-component-combobox-panel>
      {props.children}
    </Component>
  ) : null;
};

Combobox.Input = ({ compose: Component = Box, as = 'input', ...props }) => {
  const [value, setValue] = useContext(Context);
  return (
    <Component
      {...props}
      as={as}
      data-component-combobox-input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

Combobox.MenuItem = ({ compose: Component = Box, as = 'div', ...props }) => {
  return <Component {...props} as={as} data-component-combobox-menu-item />;
};

export const styles = {
  combobox: {},
  panel: {},
  input: {},
};
