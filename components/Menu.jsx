import React from 'react';
import { CrossIcon, CheckIcon } from '@modulz/radix-icons';
import { Menu as MenuPrimitive, styles } from '../primitives/Menu';
import { styled } from '../css';
import { theme } from '../theme';
import { MenuPanel } from './MenuPanel';
import { MenuItem } from './MenuItem';

export const Menu = (props) => (
  <MenuPrimitive as={MenuPanel} {...props}>
    {props.children}
  </MenuPrimitive>
);

const _MenuItem = (props) => (
  <MenuPrimitive.Item as={MenuItem} {...props}>
    <MenuPrimitive.Icon as={CheckIcon} {...props} style={{ marginRight: '5px' }} />
    {props.children}
  </MenuPrimitive.Item>
);

Menu.Item = _MenuItem;
Menu.Icon = _MenuItem;
