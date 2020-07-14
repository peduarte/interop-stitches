import React from 'react';
import { Box } from 'react-polymorphic-box';

export const MenuPanel = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component data-component-menu-panel {...props} as={as} />
);

export const styles = {
  menuPanel: {},
};
