import React from 'react';
import { styled } from '../../css';

export const Text = styled((props) => <styled.Box {...props} data-component-text />, {
  fontSize: 'inherit',
});
