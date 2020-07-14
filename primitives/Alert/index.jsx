import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Alert = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component {...props} as={as} data-component-alert />
);

Alert.CloseButton = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component
    {...props}
    as={as}
    onClick={() => alert('primitive functionality')}
    data-component-alert-close-button
  />
);

Alert.Title = ({ compose: Component = Box, as = 'div', ...props }) => (
  <Component {...props} as={as} data-component-alert-title />
);

export const styles = {
  alert: {},
};
