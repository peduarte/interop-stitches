import React from 'react';

export const Alert = ({ as: Component = 'div', ...props }) => (
  <Component {...props} data-component-alert />
);

const AlertCloseButton = ({ as: Component = 'button', ...props }) => (
  <Component
    {...props}
    onClick={() => alert('primitive functionality')}
    data-component-alert-close-button
  />
);

Alert.CloseButton = AlertCloseButton;

export const styles = {
  alert: {},
};
