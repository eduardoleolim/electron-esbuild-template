import React, { CSSProperties } from 'react';
import { Column } from './shared/components/layouts';
import { FilledButton } from './shared/components/material3';

export function PageOne() {
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

      <FilledButton href="#/examples">Material Web Examples</FilledButton>
    </Column>
  );
}
