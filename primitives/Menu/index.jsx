import React, { useContext } from 'react';
import { Box } from 'react-polymorphic-box';

const Context = React.createContext(false);

export const Menu = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component {...props} as={as} data-component-menu />
);

Menu.Item = ({ compose: Component = Box, as = 'button', ...props }) => (
  <Component
    {...props}
    as={as}
    onClick={() => alert('primitive functionality')}
    data-component-menu-item
  >
    <Context.Provider value={props.selected}>{props.children}</Context.Provider>
  </Component>
);

Menu.Icon = ({ compose: Component = Box, as = 'svg', ...props }) => {
  const checked = useContext(Context);
  return (
    <Component
      {...props}
      as={as}
      data-component-menu-icon
      style={{
        visibility: checked ? 'visible' : 'hidden',
        display: 'inline-block',
        ...props.style,
      }}
    />
  );
};

export const styles = {
  menu: {},
  menuItem: {},
};
