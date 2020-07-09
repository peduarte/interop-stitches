import React from 'react';
import { MenuItem as MenuItemPrimitive, styles } from '../primitives/MenuItem';
import { styled } from '../css';
import { theme } from '../theme';

const StyledMenuItem = styled('button', {
  ...styles.menuItem,
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

export const MenuItem = (props) => <MenuItemPrimitive use={StyledMenuItem} {...props} />;
