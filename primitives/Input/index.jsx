import React from 'react';

export const Input = ({ as: Component = 'input', ...props }) => (
  <Component data-component-input {...props} />
);

export const styles = {
  input: {
    appearance: 'none',
    border: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
};
