import { createComponent } from '@lit/react';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import React from 'react';
export { MdFilledTextField, MdOutlinedTextField };

export const FilledTextField = createComponent({
  react: React,
  tagName: 'md-filled-text-field',
  elementClass: MdFilledTextField
});

export const OutlinedTextField = createComponent({
  react: React,
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField
});
