import React from 'react';
import { CrossIcon, CheckIcon } from '@modulz/radix-icons';
import { Menu as MenuPrimitive, styles } from '../primitives/Menu';
import { styled } from '../css';
import { theme } from '../theme';
import { MenuPanel } from './MenuPanel';
import { MenuItem as MenuItemPart } from './MenuItem';

export const Menu = (props) => (
  <MenuPrimitive use={MenuPanel} {...props}>
    {props.children}
  </MenuPrimitive>
);

const MenuItem = (props) => (
  <MenuPrimitive.Item use={MenuItemPart} {...props}>
    <MenuPrimitive.Icon use={CheckIcon} {...props} style={{ marginRight: '5px' }} />
    {props.children}
  </MenuPrimitive.Item>
);

Menu.Item = MenuItem;
