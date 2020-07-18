// Test 2
// This test uses the callback function and styled.Box
// Components created via the `styled` function should be correctly typed:
// - attributes
// - events
// - variants
// - responsive variants
// - polymorphism via `as` prop

import { styled } from '../css';

const Div = styled((props) => <styled.Box {...props} as={props.as || 'div'} />, {});

export function BaseButton() {
  return <button />;
}

const Button = styled<{ as: 'button' }>((props) => <styled.Box {...props} />, {
  color: 'red',
});

const ButtonWithVariants = styled(
  (props) => <styled.Box {...props} as={props.as || 'button'} />,
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
// ❌ FAIL
export function AttributeTest() {
  return <Button />;
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
// ❌ FAIL
export function VariantTest() {
  return <ButtonWithVariants /*size*/ />;
}
export function VariantTestInvalid() {
  return <ButtonWithVariants size="invalid" />;
}

// Button should auto complete its variants when using responsive syntax
// in this test we check that the `size` variant is valid and autocompleted
// ❌ FAIL
export function VariantTestResponsive() {
  return <ButtonWithVariants /*size={{ medium }}*/ />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a "a", we expect the `hred` attribute to exist
// ❌ FAIL
export function PolyDivAsA() {
  return <Div as="a" href="#" />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a Button, we expect the `type` attribute to exist
// ❌ FAIL
export function PolyDivAsButton() {
  return <Div as={Button} type="button" />;
}

// Div should accept as prop and be typed accordingly
// in this test we render the Div as a ButtonWithVariants, we expect the `size` variant to exist
// ❌ FAIL
export function PolyDivAsButtonWithVariant() {
  return <Div as={ButtonWithVariants} type="button" size="medium" />;
}
