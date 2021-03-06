import React from 'react';
import { CrossIcon } from '@modulz/radix-icons';
import { Alert as AlertPrimitive, styles } from '../primitives/Alert';
import { styled, css } from '../css';
import { theme } from '../theme';
import { IconButton } from './IconButton';

const StyledAlert = styled(
  AlertPrimitive,
  {
    ...styles.alert,
    position: 'relative',
    borderRadius: 2,
    borderWidth: '1px',
    borderStyle: 'solid',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
  },
  {
    variant: {
      gray: {
        backgroundColor: 'gray200',
        borderColor: 'gray400',
      },
      blue: {
        backgroundColor: 'blue200',
        borderColor: 'blue400',
      },
      red: {
        backgroundColor: 'red200',
        borderColor: 'red400',
      },
      green: {
        backgroundColor: 'green200',
        borderColor: 'green400',
      },
      yellow: {
        backgroundColor: 'yellow200',
        borderColor: 'yellow400',
      },
    },
  }
);

StyledAlert.defaultProps = {
  variant: 'gray',
};

export const Alert = (props) => (
  <StyledAlert {...props}>
    <AlertPrimitive.CloseButton
      as={IconButton}
      styled={css({ position: 'absolute', right: '10px', top: '10px' })}
    >
      <CrossIcon />
    </AlertPrimitive.CloseButton>
    {props.children}
  </StyledAlert>
);
