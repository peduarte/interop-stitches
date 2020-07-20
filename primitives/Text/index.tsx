import * as React from 'react';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

type PrimitiveComponentProps<
  E extends React.ElementType,
  P extends {
    compose?: React.ComponentType<any>;
  }
> = P['compose'] extends React.ComponentType<infer CP>
  ? PolymorphicComponentProps<E, P & CP>
  : PolymorphicComponentProps<E, P>;

interface PrimitiveComponent<T extends React.ElementType> {
  <
    P extends {
      compose?: React.ComponentType<any>;
    },
    E extends React.ElementType = T
  >(
    props: PrimitiveComponentProps<E, P>
  ): JSX.Element;
}

const Primitive = React.forwardRef(function Primitive<E extends React.ElementType, P>(
  props: PrimitiveComponentProps<E, P>
) {
  const { compose: Component = Box, as = 'div', ...restProps } = props as any;
  return <Component as={as} {...restProps} />;
});

// Primitives would be built like this
const HeadingPrimitive = React.forwardRef(function HeadingPrimitive(props, ref) {
  return <Primitive as="h2" {...props} ref={ref} />;
}) as PrimitiveComponent<'h2'>;

function Foo(props: { test?: string }) {
  return null;
}

export const Composition = () => {
  return <HeadingPrimitive as="a" href="" compose={Foo} test="123" />;
};

export const Text = ({ compose: Component = Box, as = 'div', ...props }) => {
  // @ts-ignore
  return <Component {...props} as={as} data-component-text />;
};

export const styles = {};
