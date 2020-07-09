import React from 'react';
import Head from 'next/head';

import { Button } from '../components/Button';

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
        <title>Responsive button</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button variant={{ small: 'blue', large: 'red' }}>Default button</Button>
    </div>
  );
}
