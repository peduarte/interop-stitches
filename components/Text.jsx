import React from 'react';
import { Text as TextPrimitive, styles } from '../primitives/Text';
import { styled } from '../css';
import { theme } from '../theme';

const StyledText = styled(
  'div',
  {
    ...styles.text,
    fontFamily: 'normal',
    fontVariantNumeric: 'tabular-nums',
    margin: 0,
  },
  {
    size: {
      0: {
        fontSize: 0,
        lineHeight: 0,
        letterSpacing: 0,
      },
      1: {
        fontSize: 1,
        lineHeight: 2,
        letterSpacing: '-0.001em',
      },
      2: {
        fontSize: 2,
        lineHeight: 2,
        letterSpacing: '-0.002em',
      },
      3: {
        fontSize: 3,
        lineHeight: 2,
        letterSpacing: '-0.003em',
      },
      4: {
        fontSize: 4,
        lineHeight: 2,
        letterSpacing: '-0.005em',
      },
      5: {
        fontSize: 5,
        lineHeight: 2,
        letterSpacing: '-0.008em',
      },
      6: {
        fontSize: 6,
        lineHeight: 3,
        letterSpacing: '-0.013em',
      },
      7: {
        fontSize: 7,
        lineHeight: 3,
        letterSpacing: '-0.021em',
      },
      8: {
        fontSize: 8,
        lineHeight: 4,
        letterSpacing: '-0.034em',
      },
      9: {
        fontSize: 9,
        lineHeight: 5,
        letterSpacing: '-0.034em',
      },
      10: {
        fontSize: 10,
        lineHeight: 9,
        letterSpacing: '-0.055em',
      },
    },
    weight: {
      normal: {
        fontWeight: '400',
      },
      bold: {
        fontWeight: '500',
      },
    },
  }
);

StyledText.defaultProps = { size: '4', weight: 'normal' };

export const Text = (props) => <TextPrimitive use={StyledText} {...props} />;
