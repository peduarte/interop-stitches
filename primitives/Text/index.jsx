import React from 'react';

export const Text = ({ use: Component = 'div', ...props }) => (
  <Component {...props} data-component-text />
);

export const styles = {
  text: {
    fontSize: 'inherit',
  },
};
