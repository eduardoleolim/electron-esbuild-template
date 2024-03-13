import { createComponent } from '@lit/react'
import { MdPrimaryTab } from '@material/web/tabs/primary-tab'
import { MdSecondaryTab } from '@material/web/tabs/secondary-tab'
import { MdTabs } from '@material/web/tabs/tabs'
import React from 'react'
export { MdPrimaryTab, MdSecondaryTab, MdTabs }

export const PrimaryTab = createComponent({
  react: React,
  tagName: 'md-primary-tab',
  elementClass: MdPrimaryTab
})

export const SecondaryTab = createComponent({
  react: React,
  tagName: 'md-secondary-tab',
  elementClass: MdSecondaryTab
})

export const Tabs = createComponent({
  react: React,
  tagName: 'md-tabs',
  elementClass: MdTabs
})
