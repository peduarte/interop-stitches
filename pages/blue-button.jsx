import React from 'react';
import Head from 'next/head';
import { styled, theme, css, tailwind } from '../css';
import { Grid, Button } from './index';

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

      <Button variant="blue" size="0">
        Blue size 0
      </Button>
      <Button variant="blue" size="1">
        Blue size 1
      </Button>
    </Grid>
  );
}
