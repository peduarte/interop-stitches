import React from 'react';
import { styled } from '../../css';

export const MenuItem = styled(
  (props) => <styled.Box {...props} as={props.as || 'button'} data-component-menu-item />,
  {
    appearance: 'none',
    border: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  }
);
