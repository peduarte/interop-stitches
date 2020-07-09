import React from 'react';

export const Menu = ({ use: Component = 'div', ...props }) => (
  <Component {...props} data-component-menu />
);

const MenuItem = ({ use: Component = 'button', ...props }) => (
  <Component {...props} onClick={() => alert('primitive functionality')} data-component-menu-item />
);

Menu.Item = MenuItem;

export const styles = {
  menu: {},
  menuItem: {},
};
