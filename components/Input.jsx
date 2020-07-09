import React from 'react';
import { Input as InputPrimitive, styles } from '../primitives/Input';
import { styled } from '../css';
import { theme } from '../theme';

export const Input = styled(
  InputPrimitive,
  {
    ...styles.input,
    fontFamily: 'normal',
    fontVariantNumeric: 'tabular-nums',
    borderRadius: 1,
    boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
    width: '100%',
    ':disabled': {
      backgroundColor: 'gray100',
      color: 'gray500',
      cursor: 'not-allowed',
    },
    ':focus': {
      boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
      cursor: 'text',
    },
  },
  {
    size: {
      0: {
        fontSize: 1,
        letterSpacing: '-0.001em',
        height: 5,
        lineHeight: 0,
        paddingLeft: 1,
        paddingRight: 1,
      },
      1: {
        fontSize: 2,
        letterSpacing: '-0.002em',
        height: 6,
        lineHeight: 0,
        paddingLeft: 2,
        paddingRight: 2,
      },
    },
  }
);

Input.defaultProps = { size: '0' };
