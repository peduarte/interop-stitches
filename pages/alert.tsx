import React from 'react';
import Head from 'next/head';
import { styled, theme, css, tailwind, chakra } from '../css';
import { Grid, Button, Text, Space } from '../components';

const Alert = styled.div({
  backgroundColor: 'red200',
  border: `1px solid ${theme.colors.red500}`,
  borderRadius: 2,
  padding: 4,
  position: 'relative',
});

// map left/right to `space`
const AlertButton = styled.button({ borderRadius: '100%', position: 'absolute', top: '5px', right: '5px' });

const Link = styled.a(
  {},
  {
    size: {
      s: {},
      m: {},
      l: {},
    },
  }
);

export default function Home() {
  const [theme, setTheme] = React.useState(undefined);

  return (
    <Grid className={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ position: 'fixed', right: 20, top: 20 }}>
        <Button onClick={() => setTheme(undefined)}>Radix</Button>
        <Button onClick={() => setTheme(tailwind)}>Tailwind</Button>
        <Button onClick={() => setTheme(chakra)}>Chakra</Button>
      </div>

      <Alert style={{ margin: 120 }}>
        {/* Use as prop to use as another component. infer its variants */}
        <AlertButton as="a" variant="blue" size={1}>
          ⨉
        </AlertButton>

        <Text as="h1" size={6} weight="bold">
          Alert heading
        </Text>

        <Text as="p" size={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea id.
        </Text>

        <Link size="m" href="#">
          More info
        </Link>
      </Alert>
    </Grid>
  );
}
