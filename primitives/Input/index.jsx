import React from 'react';
import { styled } from '../../css';

export const Input = styled(
  (props) => <styled.Box data-component-input {...props} as={props.as || 'input'} />,
  {
    appearance: 'none',
    border: 0,
    outline: 0,
    boxSizing: 'border-box',
  }
);
