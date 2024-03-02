import { createComponent } from '@lit/react';
import { MdElevatedButton } from '@material/web/button/elevated-button';
import { MdFilledButton } from '@material/web/button/filled-button';
import { MdFilledTonalButton } from '@material/web/button/filled-tonal-button';
import { MdOutlinedButton } from '@material/web/button/outlined-button';
import { MdTextButton } from '@material/web/button/text-button';
import React from 'react';
export { MdElevatedButton, MdFilledButton, MdFilledTonalButton, MdOutlinedButton, MdTextButton };

export const ElevatedButton = createComponent({
  react: React,
  tagName: 'md-elevated-button',
  elementClass: MdElevatedButton
});

export const FilledButton = createComponent({
  react: React,
  tagName: 'md-filled-button',
  elementClass: MdFilledButton
});

export const FilledTonalButton = createComponent({
  react: React,
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalButton
});

export const OutlinedButton = createComponent({
  react: React,
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton
});

export const TextButton = createComponent({
  react: React,
  tagName: 'md-text-button',
  elementClass: MdTextButton
});
