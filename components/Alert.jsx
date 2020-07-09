import React from 'react';
import { CrossIcon } from '@modulz/radix-icons';
import { Alert as AlertPrimitive, styles } from '../primitives/Alert';
import { styled } from '../css';
import { theme } from '../theme';
import { IconButton } from './IconButton';

const StyledAlert = styled(
  'div',
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
    // [IconButton]: {
    //   position: 'absolute',
    //   right: '10px',
    //   top: '10px',
    // },
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
  <AlertPrimitive use={StyledAlert} {...props}>
    <AlertPrimitive.CloseButton
      use={IconButton}
      styled={{ position: 'absolute', right: '10px', top: '10px' }}
    >
      <CrossIcon />
    </AlertPrimitive.CloseButton>
    {props.children}
  </AlertPrimitive>
);
