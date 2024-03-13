import React, { CSSProperties } from 'react'
import { Column } from './shared/components/layouts'
import { FilledButton } from './shared/components/material3'

export function PageOne (): React.JSX.Element {
  const style: CSSProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw'
  }

  return (
    <Column style={style}>
      <h1>Electron + React + Material Web</h1>

      <p>Welcome to your Electron React app!</p>

      <FilledButton href='#/examples'>Material Web Examples</FilledButton>
    </Column>
  )
}
