import React from 'react';

export const Button = ({ as: Component = 'button', ...props }) => (
  <Component data-component-button {...props} />
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
};
