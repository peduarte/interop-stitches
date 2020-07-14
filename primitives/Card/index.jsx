import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Card = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component data-component-card {...props} as={as} />
);

export const styles = {
  card: {
    outline: 0,
  },
};
