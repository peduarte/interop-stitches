import React from 'react';
import Head from 'next/head';
import { styled } from '../css';
import { Box } from '../components/Box';
import { Button } from '../components/Button';

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
        <title>Buttons Demo</title>
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
    </div>
  );
}
