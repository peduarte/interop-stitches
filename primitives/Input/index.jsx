import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Input = ({ compose: Component = Box, as = 'input', ...props }) => (
  <Component data-component-input {...props} as={as} />
);

export const styles = {
  input: {
    appearance: 'none',
    border: '0',
    outline: 0,
    boxSizing: 'border-box',
  },
};
