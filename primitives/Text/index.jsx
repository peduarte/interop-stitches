import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Text = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component {...props} as={as} data-component-text />
);

export const styles = {
  text: {
    fontSize: 'inherit',
  },
};
