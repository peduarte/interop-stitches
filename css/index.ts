import { createCss } from './stitches/css';
import { createStyled } from './stitches/styled';
// import { createCss } from '@stitches/css';
// import { createStyled } from '@stitches/styled';
import { theme } from '../theme';

export const css = createCss({
  tokens: theme,
  utils: {
    size: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(utilCss.width(value, pseudo), utilCss.height(value, pseudo));
    },
    bg: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.backgroundColor(value, pseudo);
    },
    mt: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.marginTop(value, pseudo);
    },
    mr: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.marginRight(value, pseudo);
    },
    mb: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.marginBottom(value, pseudo);
    },
    ml: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.marginLeft(value, pseudo);
    },
    marginX: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(utilCss.marginLeft(value, pseudo), utilCss.marginRight(value, pseudo));
    },
    mx: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(utilCss.marginLeft(value, pseudo), utilCss.marginRight(value, pseudo));
    },
    marginY: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(utilCss.marginTop(value, pseudo), utilCss.marginBottom(value, pseudo));
    },
    my: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(utilCss.marginTop(value, pseudo), utilCss.marginBottom(value, pseudo));
    },
    pt: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.paddingTop(value, pseudo);
    },
    pr: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.paddingRight(value, pseudo);
    },
    pb: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.paddingBottom(value, pseudo);
    },
    pl: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.paddingLeft(value, pseudo);
    },
    paddingX: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(
        utilCss.paddingLeft(value, pseudo),
        utilCss.paddingRight(value, pseudo)
      );
    },
    px: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(
        utilCss.paddingLeft(value, pseudo),
        utilCss.paddingRight(value, pseudo)
      );
    },
    paddingY: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(
        utilCss.paddingTop(value, pseudo),
        utilCss.paddingBottom(value, pseudo)
      );
    },
    py: (utilCss) => (value: number | string, pseudo?: string) => {
      return utilCss.compose(
        utilCss.paddingTop(value, pseudo),
        utilCss.paddingBottom(value, pseudo)
      );
    },
  },
  screens: {
    small: (rule) => rule,
    medium: (rule) => `@media (min-width: 600px) { ${rule} }`,
    large: (rule) => `@media (min-width: 1000px) { ${rule} }`,
    xlarge: (rule) => `@media (min-width: 1080px) { ${rule} }`,
  },
});

export const tailwind = css.theme({
  colors: {
    gray100: '#f7fafc',
    gray200: '#edf2f7',
    gray300: '#e2e8f0',
    gray400: '#cbd5e0',
    gray500: '#a0aec0',
    gray600: '#718096',
    gray700: '#4a5568',
    gray800: '#2d3748',
    gray900: '#1a202c',

    blue100: '#ebf8ff',
    blue200: '#bee3f8',
    blue300: '#90cdf4',
    blue400: '#63b3ed',
    blue500: '#4299e1',
    blue600: '#3182ce',
    blue700: '#2b6cb0',
    blue800: '#2c5282',
    blue900: '#2a4365',

    red100: '#fff5f5',
    red200: '#fed7d7',
    red300: '#feb2b2',
    red400: '#fc8181',
    red500: '#f56565',
    red600: '#e53e3e',
    red700: '#c53030',
    red800: '#9b2c2c',
    red900: '#742a2a',

    green100: '#f0fff4',
    green200: '#c6f6d5',
    green300: '#9ae6b4',
    green400: '#68d391',
    green500: '#48bb78',
    green600: '#38a169',
    green700: '#2f855a',
    green800: '#276749',
    green900: '#22543d',

    yellow100: '#fffff0',
    yellow200: '#fefcbf',
    yellow300: '#faf089',
    yellow400: '#f6e05e',
    yellow500: '#ecc94b',
    yellow600: '#d69e2e',
    yellow700: '#b7791f',
    yellow800: '#975a16',
    yellow900: '#744210',
  },
});

export const chakra = css.theme({
  colors: {
    gray100: '#EDF2F7',
    gray200: '#E2E8F0',
    gray300: '#CBD5E0',
    gray400: '#A0AEC0',
    gray500: '#718096',
    gray600: '#4A5568',
    gray700: '#2D3748',
    gray800: '#1A202C',
    gray900: '#171923',

    blue100: '#ceedff',
    blue200: '#90cdf4',
    blue300: '#63b3ed',
    blue400: '#4299e1',
    blue500: '#3182ce',
    blue600: '#2a69ac',
    blue700: '#1e4e8c',
    blue800: '#153e75',
    blue900: '#1a365d',

    red100: '#fed7d7',
    red200: '#feb2b2',
    red300: '#fc8181',
    red400: '#f56565',
    red500: '#e53e3e',
    red600: '#c53030',
    red700: '#9b2c2c',
    red800: '#822727',
    red900: '#63171b',

    green100: '#c6f6d5',
    green200: '#9ae6b4',
    green300: '#68d391',
    green400: '#48bb78',
    green500: '#38a169',
    green600: '#2f855a',
    green700: '#276749',
    green800: '#22543d',
    green900: '#1C4532',

    yellow100: '#fefcbf',
    yellow200: '#faf089',
    yellow300: '#f6e05e',
    yellow400: '#ecc94b',
    yellow500: '#d69e2e',
    yellow600: '#b7791f',
    yellow700: '#975a16',
    yellow800: '#744210',
    yellow900: '#5F370E',
  },
});

// @ts-ignore
export const styled = createStyled(css);
