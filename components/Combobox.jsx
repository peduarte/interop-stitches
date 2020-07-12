import React from 'react';
import { CrossIcon, CheckIcon } from '@modulz/radix-icons';
import { Combobox as ComboboxPrimitive } from '../primitives/Combobox';
import { styled, css } from '../css';
import { theme } from '../theme';
import { Input } from './Input';
import { MenuPanel } from './MenuPanel';
import { MenuItem as MenuItemPart } from './MenuItem';

export const Combobox = (props) => (
  <ComboboxPrimitive {...props} style={{ position: 'relative' }}>
    <ComboboxPrimitive.Input as={Input} placeholder="Combobox" size="1" />
    <ComboboxPrimitive.Panel
      as={MenuPanel}
      styled={css({ position: 'absolute', top: '100%', mt: 2, width: '100%' })}
    >
      <ComboboxPrimitive.MenuItem as={MenuItemPart}>Suggestion 1</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem as={MenuItemPart}>Suggestion 2</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem as={MenuItemPart}>Suggestion 3</ComboboxPrimitive.MenuItem>
      <ComboboxPrimitive.MenuItem as={MenuItemPart}>Suggestion 4</ComboboxPrimitive.MenuItem>
    </ComboboxPrimitive.Panel>
  </ComboboxPrimitive>
);
