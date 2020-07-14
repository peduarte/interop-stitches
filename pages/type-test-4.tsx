// Test 4
// This test uses the `styled.Box` component directly

import { css, styled } from '../css';

// Pass `as` prop and get correct attributes
// ✅ PASS
function Button() {
  return <styled.Box as="button" type="button" onClick={(event) => console.log(event)} />;
}

function A() {
  return <styled.Box as="a" href="" />;
}

// styled.Box should accept a styled prop too
// Need to test visually too
// ❌ FAIL
function B() {
  return <styled.Box styled={css({ backgroundColor: 'red', padding: 5 })} />;
}
