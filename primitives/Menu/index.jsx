import React, { useContext } from 'react';

const Context = React.createContext(false);

export const Menu = ({ use: Component = 'div', ...props }) => (
  <Component {...props} data-component-menu />
);

const MenuItem = ({ use: Component = 'button', ...props }) => (
  <Component {...props} onClick={() => alert('primitive functionality')} data-component-menu-item>
    <Context.Provider value={props.selected}>{props.children}</Context.Provider>
  </Component>
);

const MenuIcon = ({ use: Component = 'svg', ...props }) => {
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
