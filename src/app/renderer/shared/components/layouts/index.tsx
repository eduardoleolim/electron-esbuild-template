import React, { HTMLAttributes } from 'react'
import './style.scss'

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function Column (props: LayoutProps): React.JSX.Element {
  const className = props.className !== undefined ? `${props.className} layout-column` : 'layout-column'

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}

export function Row (props: LayoutProps): React.JSX.Element {
  const className = props.className !== undefined ? `${props.className} layout-row` : 'layout-row'

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}

export function Box (props: LayoutProps): React.JSX.Element {
  const className = props.className !== undefined ? `${props.className} layout-box` : 'layout-box'

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  )
}
