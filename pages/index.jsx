import React from 'react';
import Head from 'next/head';
import { ChatBubbleIcon } from '@modulz/radix-icons';
import { styled } from '../css';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Slider } from '../components/Slider';
import { Alert } from '../components/Alert';
import { Text } from '../components/Text';

export default function Home() {
  React.useEffect(() => {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.red = 'stylesheet';
    link.href = 'https://core.modulz.app/fonts/fonts.css';
    head.appendChild(link);
  }, []);

  return (
    <div>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        styled={styled({
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(4, min-content)',
          marginBottom: 4,
        })}
      >
        <Button>Default button</Button>
        <Button variant="blue">Blue button</Button>
        <Button variant="green">Green button</Button>
        <Button variant="red">Red button</Button>
      </Box>

      <Box
        styled={styled({
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(4, min-content)',
          marginBottom: 4,
        })}
      >
        <Button size="1">Default large button</Button>
        <Button size="1" variant="blue">
          Blue large button
        </Button>
        <Button size="1" variant="green">
          Green large button
        </Button>
        <Button size="1" variant="red">
          Red large button
        </Button>
      </Box>

      <Box
        styled={styled({
          marginBottom: 4,
        })}
      >
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
      </Box>

      <Box
        styled={styled({
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Slider />
        <Slider disabled />
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

      <Box>
        <Text size="0">What I talk about when I talk about running</Text>
        <Text weight="bold" size="0">
          What I talk about when I talk about running
        </Text>
        <Text size="1">What I talk about when I talk about running</Text>
        <Text weight="bold" size="1">
          What I talk about when I talk about running
        </Text>
        <Text size="2">What I talk about when I talk about running</Text>
        <Text weight="bold" size="2">
          What I talk about when I talk about running
        </Text>
        <Text size="3">What I talk about when I talk about running</Text>
        <Text weight="bold" size="3">
          What I talk about when I talk about running
        </Text>
        <Text size="4">What I talk about when I talk about running</Text>
        <Text weight="bold" size="4">
          What I talk about when I talk about running
        </Text>
        <Text size="5">What I talk about when I talk about running</Text>
        <Text weight="bold" size="5">
          What I talk about when I talk about running
        </Text>
        <Text size="6">What I talk about when I talk about running</Text>
        <Text weight="bold" size="6">
          What I talk about when I talk about running
        </Text>
        <Text size="7">What I talk about when I talk about running</Text>
        <Text weight="bold" size="7">
          What I talk about when I talk about running
        </Text>
        <Text size="8">What I talk about when I talk about running</Text>
        <Text weight="bold" size="8">
          What I talk about when I talk about running
        </Text>
        <Text size="9">What I talk about when I talk about running</Text>
        <Text weight="bold" size="9">
          What I talk about when I talk about running
        </Text>
        <Text size="10">What I talk about when I talk about running</Text>
        <Text weight="bold" size="10">
          What I talk about when I talk about running
        </Text>
        <Text size="10" as="span" styled={styled({ color: 'blue600' })}>
          I
        </Text>{' '}
        <Text size="10" as="span" styled={styled({ color: 'blue600' })}>
          can
        </Text>{' '}
        <Text size="10" as="span" styled={styled({ color: 'yellow600' })}>
          be
        </Text>{' '}
        <Text size="10" as="span" styled={styled({ color: 'yellow600' })}>
          colourful
        </Text>{' '}
        <Text size="10" as="span" styled={styled({ color: 'green600' })}>
          too!
        </Text>
      </Box>
    </div>
  );
}
