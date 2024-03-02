import { createComponent } from '@lit/react';
import { MdCircularProgress } from '@material/web/progress/circular-progress';
import { MdLinearProgress } from '@material/web/progress/linear-progress';
import React from 'react';
export { MdCircularProgress, MdLinearProgress };

export const CircularProgress = createComponent({
  react: React,
  tagName: 'md-circular-progress',
  elementClass: MdCircularProgress
});

export const LinearProgress = createComponent({
  react: React,
  tagName: 'md-linear-progress',
  elementClass: MdLinearProgress
});
