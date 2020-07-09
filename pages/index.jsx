import React from 'react';
import Head from 'next/head';
import { ChatBubbleIcon, CheckIcon } from '@modulz/radix-icons';
import { styled } from '../css';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Slider } from '../components/Slider';
import { Alert } from '../components/Alert';
import { Text } from '../components/Text';
import { MenuItem } from '../components/MenuItem';
import { MenuPanel } from '../components/MenuPanel';
import { Menu } from '../components/Menu';
import { Input } from '../components/Input';
import { Combobox } from '../components/Combobox';

export default function Home() {
  React.useEffect(() => {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://core.modulz.app/fonts/fonts.css';
    head.appendChild(link);
  }, []);

  return (
    <div style={{ margin: 160 }}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        styled={{
          display: 'grid',
          marginBottom: 4,
          gridTemplateColumns: 'repeat(1, min-content)',
          gap: '20px',
        }}
      >
        <Button>Default button</Button>
        <Button variant="blue">Blue button</Button>
        <Button variant="green">Green button</Button>
        <Button variant="red">Red button</Button>
      </Box>
      <Box
        styled={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(4, min-content)',
          marginBottom: 4,
        }}
      >
        <Button size="1">Default large button</Button>
        <Button variant="blue">Blue large button</Button>
        <Button size="1" variant="green">
          Green large button
        </Button>
        <Button size="1" variant="red">
          Red large button
        </Button>
      </Box>
      <Box
        styled={{
          width: '50%',
        }}
      >
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
      </Box>
      <Box
        styled={{
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <Slider />
        <Slider disabled />
      </Box>
      <Box styled={{ mb: 4 }}>
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
        <Text weight="bold" size="10" as="span" styled={{ color: 'blue600' }}>
          I
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'blue600' }}>
          can
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'yellow600' }}>
          be
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'yellow600' }}>
          colourful
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'red600' }}>
          and
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'red600' }}>
          bold
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={{ color: 'green600' }}>
          too!
        </Text>
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
      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <MenuItem>
          <Text size={1}>Menu item</Text>
        </MenuItem>
        <MenuItem>
          <Text size={1}>Menu item</Text>
        </MenuItem>
        <MenuItem disabled>
          <Text size={1}>Menu item disabled</Text>
        </MenuItem>
      </Box>
      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <MenuPanel>
          <Box styled={{ height: '100px' }} />
        </MenuPanel>
      </Box>
      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <Menu>
          <Menu.Item>
            <Text size={1}>Orange</Text>
          </Menu.Item>
          <Menu.Item selected>
            Apple <Text size={1}></Text>
          </Menu.Item>
          <Menu.Item disabled>
            <Text size={1}>Pear</Text>
          </Menu.Item>
          <Menu.Item>
            <Text size={1}>Passion fruit</Text>
          </Menu.Item>
        </Menu>
      </Box>

      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <Input value="bye@hey.com" onChange={() => null} />
        <Input size="1" value="bye@hey.com" onChange={() => null} />
      </Box>

      <Box
        styled={{
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        }}
      >
        <Combobox />
      </Box>
    </div>
  );
}
