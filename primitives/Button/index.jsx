import React from 'react';
import { styled } from '../../css';

export const Button = styled(
  (props) => <styled.Box data-component-button {...props} as={props.as || 'button'} />,
  {
    appearance: 'none',
    border: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  }
);
