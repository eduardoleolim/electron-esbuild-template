import { createComponent } from '@lit/react'
import { MdFilledIconButton } from '@material/web/iconbutton/filled-icon-button'
import { MdFilledTonalIconButton } from '@material/web/iconbutton/filled-tonal-icon-button'
import { MdIconButton } from '@material/web/iconbutton/icon-button'
import { MdOutlinedIconButton } from '@material/web/iconbutton/outlined-icon-button'
import React from 'react'
export { MdFilledIconButton, MdFilledTonalIconButton, MdIconButton, MdOutlinedIconButton }

export const FilledIconButton = createComponent({
  react: React,
  tagName: 'md-filled-icon-button',
  elementClass: MdFilledIconButton
})

export const FilledTonalIconButton = createComponent({
  react: React,
  tagName: 'md-filled-tonal-icon-button',
  elementClass: MdFilledTonalIconButton
})

export const IconButton = createComponent({
  react: React,
  tagName: 'md-icon-button',
  elementClass: MdIconButton
})

export const OutlinedIconButton = createComponent({
  react: React,
  tagName: 'md-outlined-icon-button',
  elementClass: MdOutlinedIconButton
})
