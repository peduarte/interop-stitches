import React, { useContext } from 'react';

const Context = React.createContext(false);

export const Menu = ({ as: Component = 'div', ...props }) => (
  <Component {...props} data-component-menu />
);

const MenuItem = ({ as: Component = 'button', ...props }) => (
  <Component {...props} onClick={() => alert('primitive functionality')} data-component-menu-item>
    <Context.Provider value={props.selected}>{props.children}</Context.Provider>
  </Component>
);

const MenuIcon = ({ as: Component = 'svg', ...props }) => {
  const checked = useContext(Context);
  return (
    <Component
      {...props}
      data-component-menu-icon
      style={{
        visibility: checked ? 'visible' : 'hidden',
        display: 'inline-block',
        ...props.style,
      }}
    />
  );
};

Menu.Item = MenuItem;
Menu.Icon = MenuIcon;

export const styles = {
  menu: {},
  menuItem: {},
};
