import { createComponent } from '@lit/react';
import { MdBrandedFab } from '@material/web/fab/branded-fab';
import { MdFab } from '@material/web/fab/fab';
import React from 'react';
export { MdBrandedFab, MdFab };

export const BrandedFloatingActionButton = createComponent({
  react: React,
  tagName: 'md-branded-fab',
  elementClass: MdBrandedFab
});

export const FloatingActionButton = createComponent({
  react: React,
  tagName: 'md-fab',
  elementClass: MdFab
});
