import { createComponent } from '@lit/react'
import { MdFilledSelect } from '@material/web/select/filled-select'
import { MdOutlinedSelect } from '@material/web/select/outlined-select'
import { MdSelectOption } from '@material/web/select/select-option'
import React from 'react'
export { MdFilledSelect, MdOutlinedSelect, MdSelectOption }

export const FilledSelect = createComponent({
  react: React,
  tagName: 'md-filled-select',
  elementClass: MdFilledSelect
})

export const OutlinedSelect = createComponent({
  react: React,
  tagName: 'md-outlined-select',
  elementClass: MdOutlinedSelect
})

export const SelectOption = createComponent({
  react: React,
  tagName: 'md-select-option',
  elementClass: MdSelectOption
})
