import React from 'react';
import { Card as CardPrimitive, styles } from '../primitives/Card';
import { styled } from '../css';
import { theme } from '../theme';

export const Card = styled(
  CardPrimitive,
  {
    ...styles.card,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 2,
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  {
    variant: {
      border: {
        borderColor: theme.colors.gray300,
      },
      shadow: {
        position: 'relative',
        borderColor: 'transparent',
        '::before': {
          content: `""`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          boxShadow:
            'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
          opacity: 1,
        },
      },
      ghost: {
        position: 'relative',
        transition: 'opacity 80ms linear, transform 150ms ease',
        borderColor: 'transparent',
        '::before': {
          content: `""`,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          transitionProperty: 'all',
          transitionDuration: '80ms',
          transitionTimingFunction: 'linear',
          boxShadow:
            'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
          opacity: 0,
        },
        ':hover::before': {
          opacity: 1,
        },
      },
    },
  }
);

Card.defaultProps = { variant: 'border' };
