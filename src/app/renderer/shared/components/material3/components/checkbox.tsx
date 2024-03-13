import { createComponent } from '@lit/react'
import { MdCheckbox } from '@material/web/checkbox/checkbox'
import React from 'react'
export { MdCheckbox }

export const Checkbox = createComponent({
  react: React,
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
  events: {
    onChange: 'change'
  }
})
