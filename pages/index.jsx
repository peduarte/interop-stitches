import React from 'react';
import { ChatBubbleIcon, CheckIcon } from '@modulz/radix-icons';
import { styled, css } from '../css';
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
import { Card } from '../components/Card';

export default function Home() {
  return (
    <div style={{ margin: 160 }}>
      <Box
        styled={css({
          display: 'grid',
          marginBottom: 4,
          gridTemplateColumns: 'repeat(1, min-content)',
          gap: '20px',
        })}
      >
        <Button>Default button</Button>
        <Button variant="blue">Blue button</Button>
        <Button variant="green">Green button</Button>
        <Button variant="red">Red button</Button>
      </Box>
      <Box
        styled={css({
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(4, min-content)',
          marginBottom: 4,
        })}
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
        styled={css({
          width: '50%',
        })}
      >
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
      </Box>
      <Box
        styled={css({
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Slider />
        <Slider disabled />
      </Box>
      <Box styled={css({ mb: 4 })}>
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
        <Text weight="bold" size="10" as="span" styled={css({ color: 'blue600' })}>
          I
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'blue600' })}>
          can
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'yellow600' })}>
          be
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'yellow600' })}>
          colourful
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'red600' })}>
          and
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'red600' })}>
          bold
        </Text>{' '}
        <Text weight="bold" size="10" as="span" styled={css({ color: 'green600' })}>
          too!
        </Text>
      </Box>

      <Box
        styled={css({
          display: 'grid',
          gap: '20px',
          maxWidth: '360px',
          marginBottom: 4,
        })}
      >
        <Alert>
          <Text weight="bold" styled={css({ mb: 1 })}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>

        <Alert variant="blue">
          <Text weight="bold" styled={css({ mb: 1 })}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="red">
          <Text weight="bold" styled={css({ mb: 1 })}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="green">
          <Text weight="bold" styled={css({ mb: 1 })}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
        <Alert variant="yellow">
          <Text weight="bold" styled={css({ mb: 1 })}>
            Cool alert title.
          </Text>
          <Text as="p" size="3">
            Composition at its finest.
          </Text>
        </Alert>
      </Box>
      <Box
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
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
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <MenuPanel>
          <Box styled={css({ height: '100px' })} />
        </MenuPanel>
      </Box>
      <Box
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
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
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Input value="bye@hey.com" onChange={() => null} />
        <Input size="1" value="bye@hey.com" onChange={() => null} />
      </Box>

      <Box
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Combobox />
      </Box>

      <Box
        styled={css({
          display: 'grid',
          gap: '10px',
          maxWidth: '300px',
          marginBottom: 4,
        })}
      >
        <Card>
          <Text>Defual tCard</Text>
        </Card>

        <Card variant="ghost">
          <Text>Ghost Card</Text>
        </Card>

        <Card variant="ghost" as="a" href="https://modulz.app" target="_blank">
          <Text>Ghost Card as link</Text>
        </Card>

        <Card variant="shadow">
          <Text>Card title</Text>
        </Card>
      </Box>
    </div>
  );
}
