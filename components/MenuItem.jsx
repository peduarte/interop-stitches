import React from 'react';
import { MenuItem as MenuItemPrimitive } from '../primitives/MenuItem';
import { styled } from '../css';
import { theme } from '../theme';

export const MenuItem = styled(MenuItemPrimitive, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
  flexShrink: 0,
  py: 1,
  px: 3,
  verticalAlign: 'middle',
  backgroundColor: 'white',
  width: '100%',
  ':hover:not(:disabled)': {
    backgroundColor: 'blue600',
    color: 'white',
    boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
  },
  ':disabled': {
    color: 'gray500',
    backgroundColor: 'white',
  },
});
