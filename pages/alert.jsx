import React from 'react';
import Head from 'next/head';
import { ChatBubbleIcon } from '@modulz/radix-icons';
import { styled, tailwind, chakra } from '../css';
import { Box } from '../components/Box';
import { Alert } from '../components/Alert';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

export default function Home() {
  const [theme, setTheme] = React.useState(undefined);
  React.useEffect(() => {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.red = 'stylesheet';
    link.href = 'https://core.modulz.app/fonts/fonts.css';
    head.appendChild(link);
  }, []);

  return (
    <div className={theme}>
      <Head>
        <title>Alert Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        styled={styled({
          marginBottom: 4,
        })}
      >
        <Text>Theme switcher</Text>
        <Button onClick={() => setTheme(undefined)}>Radix</Button>
        <Button onClick={() => setTheme(tailwind)} styled={styled({ marginX: 2 })}>
          Tailwind
        </Button>
        <Button onClick={() => setTheme(chakra)}>Chakra</Button>
      </Box>

      <Box
        styled={styled({
          display: 'grid',
          gap: '20px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Alert>Your browser is outdated! Your Chakra experience may be degraded.</Alert>
        <Alert variant="blue">
          Your browser is outdated! Your Chakra experience may be degraded.
        </Alert>
        <Alert variant="red">
          Your browser is outdated! Your Chakra experience may be degraded.
        </Alert>
        <Alert variant="green">
          Your browser is outdated! Your Chakra experience may be degraded.
        </Alert>
        <Alert variant="yellow">
          Your browser is outdated! Your Chakra experience may be degraded.
        </Alert>
      </Box>
    </div>
  );
}
