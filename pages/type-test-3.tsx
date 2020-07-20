// Test 3
// CSS object should be typed
// - when using `styled`
// - when using `css`
// - autocomplete tokens
// - autocomplete custom properties (utils)

import { styled, css } from '../css';

// Autcompletes CSS Properties and possible values when using `styled`
// ✅ PASS
const Div = styled('div', {
  backgroundColor: 'red',
  alignContent: 'center',
});

// Autcompletes CSS Properties and possible values *in variant* when using `styled`
// ✅ PASS - CSS Properties are autocompletes
// ❌ FAIL - Possible values, eg: values of `alignItems` dont autocomplete
// This is a Typescript issue. Originally this is also a problem on CSS properties, but using (string & {}) we are
// able to combine autocomplete of some strings with any string. But CSS variants is a generic, and for some reason
// generics does not give the same autocomplete behaviour: https://github.com/Microsoft/TypeScript/issues/29729#issuecomment-660876538
const Div2 = styled(
  'div',
  {},
  {
    size: {
      small: {
        backgroundColor: 'blue',
        alignContent: '',
      },
    },
  }
);

// Autcompletes CSS Properties and possible values when using `css`
// ✅ PASS
const style = css({
  backgroundColor: 'red',
  alignItems: 'flex-start',
});

// Autcompletes CSS Properties and tokens when using `styled`
// ✅ PASS
const Div3 = styled('div', {
  backgroundColor: 'red500',
  height: '4',
});

// Autcompletes CSS Properties and tokens when using `css`
// ✅ PASS
const style2 = css({
  backgroundColor: 'red500',
  height: '4',
});

// Autcompletes custom CSS Properties (utils) `styled`
// ✅ PASS
// paddingX: () => (value: keyof typeof theme['space']) => ({
const Div4 = styled('div', {
  paddingX: 4,
  px: '1',
});

// Autcompletes custom CSS Properties (utils) `css`
// ✅ PASS
// marginX: () => (value: keyof typeof theme['space']) => ({
const style4 = css({
  marginX: 5,
  my: '1',
});
