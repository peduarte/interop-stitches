import React from 'react';
import { styled } from '../css';
import { Box, PolymorphicComponentProps, PolymorphicComponent } from 'react-polymorphic-box';

type TextProps = React.ComponentProps<'span'> & {
  size?: 'small' | 'medium' | 'large';
};

const Text = styled.span(
  {
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
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
) as PolymorphicComponent<TextProps, 'span'>;

const Button = styled.button({
  color: 'red',
});

const Div = styled.div({
  color: 'red',
});

// Typing doesn't work
function Foo1() {
  return <styled.Box as={Button} />;
}

// Typing does work
function Foo2() {
  return <styled.Box as={Text} size="large" />;
}

// Typing does work
function Foo3() {
  return <Div as={Button} type="button" />;
}

type PrimitiveComponentProps<
  E extends React.ElementType,
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<E, P & Omit<React.ComponentProps<C>, 'as'>> & {
  compose?: C;
};

function Primitive<
  E extends React.ElementType = 'div',
  C extends React.ElementType = typeof Box,
  P = {}
>(props: PrimitiveComponentProps<E, C, P>) {
  const { compose: Component = Box, as = 'div', ...restProps } = props;
  return <Component as={as} {...restProps} />;
}

// Primitives would be built like this
function HeadingPrimitive<
  E extends React.ElementType = 'h2',
  C extends React.ElementType = typeof Primitive
>(props: PrimitiveComponentProps<E, C, {}>) {
  return <Primitive as="h2" {...props} />;
}

export const Composition = () => {
  return <HeadingPrimitive compose={Text} as="a" href="#" size="large" />;
};
