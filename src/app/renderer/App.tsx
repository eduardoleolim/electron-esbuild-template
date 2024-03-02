import React, { CSSProperties, useState } from 'react';
import { Column } from './shared/components/layouts';
import { FilledButton } from './shared/components/material3/components/button';

export function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => {
      return count + 1;
    });
  }

  const style: CSSProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw'
  };

  const infoStyle: CSSProperties = {
    marginTop: '30px',
    marginBottom: '30px',
    marginRight: '15%',
    marginLeft: '15%',
    textAlign: 'center'
  };

  return (
    <Column style={style}>
      <h1>Electron + React + Material Web</h1>

      <p>Welcome to your Electron React app!</p>

      <p style={infoStyle}>
        We are using Node.js <strong id="node-version"></strong>, Chromium <strong id="chrome-version"></strong>,
        Electron <strong id="electron-version"></strong>, React <strong id="react-version"></strong>, and Material Web
        <strong id="material-web-version"></strong>.
      </p>

      <FilledButton onClick={handleClick}>Click me!!</FilledButton>

      <p>Count: {count}</p>
    </Column>
  );
}
