import { createComponent } from '@lit/react';
import { MdRadio } from '@material/web/radio/radio';
import React from 'react';
export { MdRadio };

export const Radio = createComponent({
  react: React,
  tagName: 'md-radio',
  elementClass: MdRadio
});
