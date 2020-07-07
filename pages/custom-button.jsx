import React from 'react';
import Head from 'next/head';
import { styled, theme, css, tailwind } from '../css';
import { Grid, Button, Text, Badge, Input } from '../components';

const fancyButton = styled({
  border: `2px dotted ${theme.colors.green600}`,
  transform: 'rotate(15deg) scale(2)',
  transformOrigin: 'center center',
  ':hover': {
    transform: 'rotate(15deg) scale(3)',
  },
});

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
      </div>

      <div style={{ margin: 120 }}>
        <Button variant="blue" styled={fancyButton}>
          Fancy button
        </Button>
      </div>
    </Grid>
  );
}
