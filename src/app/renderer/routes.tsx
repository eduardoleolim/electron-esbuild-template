import React from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import { PageOne } from './PageOne'
import { PageTwo } from './PageTwo'

const routes: RouteObject[] = [
  { path: '/', element: <PageOne /> },
  { path: '/examples', element: <PageTwo /> },
  { path: '*', element: <PageOne /> }
]

export const router = createHashRouter(routes)
