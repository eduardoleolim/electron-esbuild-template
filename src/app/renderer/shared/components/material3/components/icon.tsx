import { createComponent } from '@lit/react';
import { MdIcon } from '@material/web/icon/icon';
import React from 'react';
import '../fonts';
export { MdIcon };

export const Icon = createComponent({
  react: React,
  tagName: 'md-icon',
  elementClass: MdIcon
});
