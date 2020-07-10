import React from 'react';
import { Button as ButtonPrimitive, styles } from '../primitives/Button';
import { styled } from '../css';
import { theme } from '../theme';

export const IconButton = styled(ButtonPrimitive, {
  ...styles.button,
  borderRadius: '9999px',
  color: 'gray800',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  mixBlendMode: 'multiply',
  padding: 1,
  verticalAlign: 'middle',
  ':hover': {
    backgroundColor: 'gray200',
    boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${theme.colors.gray500}`,
  },
});
IconButton.toString = () => ' [data-component-button]';
