import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App (): React.JSX.Element {
  return <RouterProvider router={router} />
}
