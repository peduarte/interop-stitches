import React from 'react';
import Head from 'next/head';
import { styled, tailwind, chakra } from '../css';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Alert } from '../components/Alert';
import { Text } from '../components/Text';

export default function Home() {
  React.useEffect(() => {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://core.modulz.app/fonts/fonts.css';
    head.appendChild(link);
  }, []);

  const [theme, setTheme] = React.useState(undefined);

  return (
    <div style={{ margin: 160 }} className={theme}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(4, min-content)',
          marginBottom: 6,
        }}
      >
        <Text styled={{ gridColumn: '1/-1' }}>Cheese a theme:</Text>
        <Button disabled={theme === undefined} onClick={() => setTheme(undefined)}>
          Radix
        </Button>
        <Button disabled={theme === tailwind} onClick={() => setTheme(tailwind)}>
          Tailwind
        </Button>
        <Button disabled={theme === chakra} onClick={() => setTheme(chakra)}>
          Chakra
        </Button>
      </Box>
      <Box
        styled={{
          display: 'grid',
          gap: '20px',
          maxWidth: '360px',
          marginBottom: 4,
        }}
      >
        <Alert>
          <Text weight="bold" styled={{ mb: 1 }}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>

        <Alert variant="blue">
          <Text weight="bold" styled={{ mb: 1 }}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="red">
          <Text weight="bold" styled={{ mb: 1 }}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="green">
          <Text weight="bold" styled={{ mb: 1 }}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="yellow">
          <Text weight="bold" styled={{ mb: 1 }}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
      </Box>
    </div>
  );
}
