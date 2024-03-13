import { createComponent } from '@lit/react'
import { MdDialog } from '@material/web/dialog/dialog'
import React from 'react'
export { MdDialog }

export const Dialog = createComponent({
  react: React,
  tagName: 'md-dialog',
  elementClass: MdDialog,
  events: {
    onClose: 'close',
    onClosed: 'closed',
    onOpen: 'open',
    onOpened: 'opened',
    onCancel: 'cancel'
  }
})
