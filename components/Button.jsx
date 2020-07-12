import React from 'react';
import { Button as ButtonPrimitive } from '../primitives/Button';
import { styled } from '../css';
import { theme } from '../theme';

export const Button = styled(
  ButtonPrimitive,
  {
    width: 'min-content',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'normal',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: 1,
    cursor: 'default',
    position: 'relative',
    whiteSpace: 'nowrap',

    ':disabled': {
      backgroundColor: 'gray100',
      boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
      color: 'gray500',
      cursor: 'not-allowed',
    },
  },
  {
    variant: {
      gray: {
        backgroundColor: 'gray100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.gray400}`,
        color: 'gray800',
        ':hover': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
        },
        ':active': {
          backgroundColor: 'gray200',
          boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}`,
        },
        ':focus': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.gray500}, 0 0 0 1px ${theme.colors.gray500}`,
        },
      },
      blue: {
        backgroundColor: 'blue100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.blue400}`,
        color: 'blue800',
        ':hover': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}`,
        },
        ':active': {
          backgroundColor: 'blue200',
          boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}`,
        },
        ':focus': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.blue500}, 0 0 0 1px ${theme.colors.blue500}`,
        },
      },
      green: {
        backgroundColor: 'green100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.green400}`,
        color: 'green800',
        ':hover': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.green500}`,
        },
        ':active': {
          backgroundColor: 'green200',
          boxShadow: `inset 0 0 0 1px ${theme.colors.green500}`,
        },
        ':focus': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.green500}, 0 0 0 1px ${theme.colors.green500}`,
        },
      },
      red: {
        backgroundColor: 'gray100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.gray400}`,
        color: 'red700',
        ':hover': {
          backgroundColor: 'red100',
          boxShadow: `inset 0 0 0 1px ${theme.colors.red400}`,
        },
        ':active': {
          backgroundColor: 'red200',
          boxShadow: `inset 0 0 0 1px ${theme.colors.red500}`,
        },
        ':focus': {
          boxShadow: `inset 0 0 0 1px ${theme.colors.red500}, 0 0 0 1px ${theme.colors.red500}`,
        },
      },
    },
    size: {
      0: {
        fontSize: '1',
        paddingLeft: 2,
        paddingRight: 2,
        minWidth: 5,
        lineHeight: 2,
        letterSpacing: '-0.005em',
      },
      1: {
        fontSize: '2',
        paddingLeft: 3,
        paddingRight: 3,
        minWidth: 6,
        lineHeight: 4,
        letterSpacing: '-0.008em',
      },
    },
  }
);

Button.defaultProps = { size: '0', variant: 'gray' };
