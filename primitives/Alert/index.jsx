import React from 'react';
import { styled } from '../../css';

export const Alert = styled(({ ...props }) => (
  <styled.Box {...props} as={props.as || 'div'} data-component-alert />
));

const AlertCloseButton = styled(({ ...props }) => (
  <styled.Box
    {...props}
    as={props.as || 'button'}
    onClick={() => alert('primitive functionality')}
    data-component-alert-close-button
  />
));

Alert.CloseButton = AlertCloseButton;
