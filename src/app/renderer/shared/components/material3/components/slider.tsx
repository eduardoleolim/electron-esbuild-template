import { createComponent } from '@lit/react';
import { MdSlider } from '@material/web/slider/slider';
import React from 'react';
export { MdSlider };

export const Slider = createComponent({
  react: React,
  tagName: 'md-slider',
  elementClass: MdSlider
});
