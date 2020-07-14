import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Button = ({ compose: Component = Box, as = 'button', ...props }) => (
  <Component {...props} as={as} data-component-button />
);

Button.Label = ({ compose: Component = Box, as = 'span', ...props }) => (
  <Component {...props} as={as} data-component-button-label />
);

export const styles = {
  button: {
    appearance: 'none',
    border: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
  label: {},
};
