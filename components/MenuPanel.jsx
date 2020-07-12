import React from 'react';
import { MenuPanel as MenuPanelPrimitive } from '../primitives/MenuPanel';
import { styled } from '../css';
import { theme } from '../theme';

export const MenuPanel = styled(MenuPanelPrimitive, {
  py: 1,
  backgroundColor: 'white',
  boxShadow:
    'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
  borderRadius: 2,
});
