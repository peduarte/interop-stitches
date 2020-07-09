import React from 'react';
import { CrossIcon, CheckIcon } from '@modulz/radix-icons';
import { Menu as MenuPrimitive, styles } from '../primitives/Menu';
import { styled } from '../css';
import { theme } from '../theme';
import { MenuPanel } from './MenuPanel';
import { MenuItem } from './MenuItem';

export const Menu = (props) => (
  <MenuPrimitive use={MenuPanel} {...props}>
    {props.children}
  </MenuPrimitive>
);

const _MenuItem = (props) => (
  <MenuPrimitive.Item use={MenuItem} {...props}>
    <MenuPrimitive.Icon use={CheckIcon} {...props} style={{ marginRight: '5px' }} />
    {props.children}
  </MenuPrimitive.Item>
);

Menu.Item = _MenuItem;
Menu.Icon = _MenuItem;
