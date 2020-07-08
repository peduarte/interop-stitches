import React from 'react';
import Head from 'next/head';
import { tailwind } from '../css';
import { Grid, Button, Text, Badge, Input } from '../components';
// import { colorRed, size5, colorRedSize5 } from '../utils';

export default function Home() {
  const [theme, setTheme] = React.useState(undefined);
  return (
    <Grid className={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://core.modulz.app/fonts/fonts.css" /> */}
      </Head>

      <div style={{ position: 'fixed', right: 20, top: 20 }}>
        <Button onClick={() => setTheme(undefined)}>Radix</Button>
        <Button onClick={() => setTheme(tailwind)}>Tailwind</Button>
      </div>

      <Button variant="gray" size="0">
        Gray size 0
      </Button>
      <Button variant="gray" size="1">
        Gray size 1
      </Button>
      <Button variant="blue" size="0">
        Blue size 0
      </Button>
      <Button variant="blue" size="1">
        Blue size 1
      </Button>
      <Button variant="green" size="0">
        Green size 0
      </Button>
      <Button variant="green" size="1">
        Green size 1
      </Button>
      <Button variant="red" size="0">
        Red size 0
      </Button>
      <Button variant="red" size="1">
        Red size 1
      </Button>
      <Text size="0">What I talk about when I talk about running</Text>
      <Text size="1">What I talk about when I talk about running</Text>
      <Text size="2">What I talk about when I talk about running</Text>
      <Text size="3">What I talk about when I talk about running</Text>
      <Text size="4">What I talk about when I talk about running</Text>
      <Text size="5">What I talk about when I talk about running</Text>
      <Text size="6">What I talk about when I talk about running</Text>
      <Text size="7">What I talk about when I talk about running</Text>
      <Text size="8">What I talk about when I talk about running</Text>
      <Text size="9">What I talk about when I talk about running</Text>
      <Text size="10">What I talk about when I talk about running</Text>
      {/* <Text size="10" className={size5}>
        What I talk about when I talk about running
      </Text>
      <Text size="10" className={colorRedSize5}>
        What I talk about when I talk about running
      </Text> */}
      <Badge variant="gray">Gray</Badge>
      <Badge variant="blue">Gray</Badge>
      <Badge variant="green">Gray</Badge>
      <Badge variant="red">Gray</Badge>
      <Badge variant="yellow">Gray</Badge>
      <Input size="0" value="bye@hey.com" />
      <Input size="1" value="bye@hey.com" />
    </Grid>
  );
}
