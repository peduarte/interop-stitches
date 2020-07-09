import React from 'react';
import { CrossIcon, CheckIcon } from '@modulz/radix-icons';
import { Combobox as ComboboxPrimitive, styles } from '../primitives/Combobox';
import { styled } from '../css';
import { theme } from '../theme';
import { Input } from './Input';
import { MenuPanel } from './MenuPanel';
import { MenuItem as MenuItemPart } from './MenuItem';

export const Combobox = (props) => (
  <ComboboxPrimitive {...props} style={{ position: 'relative' }}>
    <ComboboxPrimitive.Input use={Input} placeholder="Combobox" size="1" />
    <ComboboxPrimitive.Panel
      use={MenuPanel}
      styled={{ position: 'absolute', top: '100%', mt: 2, width: '100%' }}
    >
      <ComboboxPrimitive.MenuItem use={MenuItemPart}>Suggestion 1</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem use={MenuItemPart}>Suggestion 2</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem use={MenuItemPart}>Suggestion 3</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem use={MenuItemPart}>Suggestion 4</ComboboxPrimitive.MenuItem>
    </ComboboxPrimitive.Panel>
  </ComboboxPrimitive>
);

// const MenuItem = (props) => (
//   <MenuPrimitive.Item use={MenuItemPart} {...props}>
//     <MenuPrimitive.Icon use={CheckIcon} {...props} style={{ marginRight: '5px' }} />
//     {props.children}
//   </MenuPrimitive.Item>
// );

// Menu.Item = MenuItem;
