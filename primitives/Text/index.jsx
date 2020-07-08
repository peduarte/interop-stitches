import React from 'react';

export const Text = ({ use: Component = 'div', ...props }) => (
  <Component data-component-text {...props} />
);

export const styles = {
  text: {
    fontSize: 'inherit',
  },
};
