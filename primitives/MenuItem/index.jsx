import React from 'react';
import { Box } from 'react-polymorphic-box';

export const MenuItem = ({ compose: Component = Box, as = 'button', ...props }) => (
  <Component data-component-menu-item {...props} as={as} />
);

export const styles = {
  menuItem: {
    appearance: 'none',
    border: '0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
};
