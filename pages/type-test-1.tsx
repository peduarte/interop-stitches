// Test 1
// Components created via the `styled` function should be correctly typed:
// - attributes
// - events
// - variants
// - responsive variants
// - polymorphism via `as` prop

import { styled } from '../css';

const Div = styled.div({});

const Button = styled.button({
  color: 'red',
});

const ButtonWithVariants = styled.button(
  {
    color: 'red',
  },
  {
    size: {
      small: {
        fontSize: '12px',
      },
      medium: {
        fontSize: '16px',
      },
      large: {
        fontSize: '22px',
      },
    },
  }
);

// Button should autocomplete button's attributes
// in this test, we check that `type="button"` is valid and autocompleted
// ✅PASS
export function AttributeTest() {
  return <Button type="button" />;
}

// Button should accept `onClick` and other events
// in this test we check that the `event` is correctly typed
// ❌ FAIL
// https://github.com/christianalfoni/stitches/issues/43
// https://github.com/christianalfoni/stitches/issues/44
export function EventTest() {
  return <Button onClick={(event) => console.log(event)} />;
}

// Button should auto complete its variants
// in this test we check that the `size` variant is valid and autocompleted
// we also test that invalid variants are typed
// ✅ PASS
export function VariantTest() {
  return <ButtonWithVariants size="large" />;
}
export function VariantTestInvalid() {
  return <ButtonWithVariants size="invalid" />;
}

// Button should auto complete its variants when using responsive syntax
// in this test we check that the `size` variant is valid and autocompleted
// ✅ PASS
export function VariantTestResponsive() {
  return <ButtonWithVariants size={{ medium: 'medium' }} />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a "a", we expect the `hred` attribute to exist
// ✅  PASS
export function PolyDivAsA() {
  return <Div as="a" href="#" />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a Button, we expect the `type` attribute to exist
// ✅ PASS
export function PolyDivAsButton() {
  return <Div as={Button} type="button" />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a ButtonWithVariants, we expect the `size` variant to exist
// ✅ PASS
export function PolyDivAsButtonWithVariant() {
  return <Div as={ButtonWithVariants} type="button" size="medium" />;
}
