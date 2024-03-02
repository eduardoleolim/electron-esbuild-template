import { createComponent } from '@lit/react';
import { MdSwitch } from '@material/web/switch/switch';
import React from 'react';
export { MdSwitch };

export const Switch = createComponent({
  react: React,
  tagName: 'md-switch',
  elementClass: MdSwitch
});
