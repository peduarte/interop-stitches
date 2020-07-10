import React from 'react';

export const MenuPanel = ({ as: Component = 'div', ...props }) => (
  <Component data-component-menu-panel {...props} />
);

export const styles = {
  menuPanel: {},
};
