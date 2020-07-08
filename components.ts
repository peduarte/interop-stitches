import { styled, theme } from './css';

export const Grid = styled.div({
  display: 'grid',
  gap: '10px',
});

export const Button = styled.button(
  {
    border: 'none',
    backgroundColor: 'transparent',
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
          backgroundColor: 'red10',
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

// @ts-ignore
Button.defaultProps = {
  color: 'gray',
  size: '0',
};

export const Text = styled.h1(
  {
    fontFamily: 'normal',
    fontSize: 'inherit',
    fontVariantNumeric: 'tabular-nums',
    color: 'gray800',
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
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
  }
);

// @ts-ignore
Text.defaultProps = {
  size: 5,
  weight: 'normal',
};

export const Badge = styled.span(
  {
    maxWidth: 'min-content',
    display: 'inline-flex',
    fontFamily: 'mono',
    fontSize: 0,
    lineHeight: 0,
    wordSpacing: '-0.25em',
    minWidth: 5,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '1.25ch',
    paddingRight: '1.25ch',
    border: 0,
    borderRadius: '9999px',
  },
  {
    variant: {
      gray: {
        boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
        color: 'gray800',
      },
      blue: {
        backgroundColor: 'blue100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.blue300}`,
        color: 'blue700',
      },
      green: {
        backgroundColor: 'green100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.green300}`,
        color: 'green700',
      },
      red: {
        backgroundColor: 'red100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.red300}`,
        color: 'red700',
      },
      yellow: {
        backgroundColor: 'yellow100',
        boxShadow: `inset 0 0 0 1px ${theme.colors.yellow300}`,
        color: 'yellow700',
      },
    },
  }
);

// @ts-ignore
Badge.defaultProps = { variant: 'gray' };

export const Input = styled.input(
  {
    appearance: 'none',
    border: 'none',
    color: 'gray800',
    fontFamily: 'normal',
    fontVariantNumeric: 'tabular-nums',
    borderRadius: 1,
    boxShadow: `inset 0 0 0 1px ${theme.colors.gray300}`,
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

// @ts-ignore
Input.defaultProps = {
  size: 0,
};

export const Space = styled.div(
  {},
  {
    size: {
      0: {
        height: 0,
      },
      1: {
        height: 1,
      },
      2: {
        height: 2,
      },
      3: {
        height: 3,
      },
    },
  }
);
