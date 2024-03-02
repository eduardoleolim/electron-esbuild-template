import React, { HTMLAttributes } from 'react';
import './style.scss';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function Column(props: LayoutProps) {
  const className = props.className ? `${props.className} layout-column` : 'layout-column';

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}

export function Row(props: LayoutProps) {
  const className = props.className ? `${props.className} layout-row` : 'layout-row';

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}

export function Box(props: LayoutProps) {
  const className = props.className ? `${props.className} layout-box` : 'layout-box';

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
