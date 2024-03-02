import { createComponent } from '@lit/react';
import { MdRipple } from '@material/web/ripple/ripple';
import React from 'react';
export { MdRipple };

export const Ripple = createComponent({
  react: React,
  tagName: 'md-ripple',
  elementClass: MdRipple
});
