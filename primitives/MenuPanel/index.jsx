import React from 'react';

export const MenuPanel = ({ use: Component = 'div', ...props }) => (
  <Component data-component-menu-panel {...props} />
);

export const styles = {
  menuPanel: {},
};
