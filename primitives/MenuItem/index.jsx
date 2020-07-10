import React from 'react';

export const MenuItem = ({ as: Component = 'button', ...props }) => (
  <Component data-component-menu-item {...props} />
);

export const styles = {
  menuItem: {
    appearance: 'none',
    border: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
};
