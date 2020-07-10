import React from 'react';

export const Card = ({ as: Component = 'div', ...props }) => (
  <Component data-component-card {...props} />
);

export const styles = {
  card: {
    outline: 0,
  },
};
