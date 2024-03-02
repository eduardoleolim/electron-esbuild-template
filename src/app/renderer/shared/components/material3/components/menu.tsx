import { createComponent } from '@lit/react';
import { MdMenu } from '@material/web/menu/menu';
import { MdMenuItem } from '@material/web/menu/menu-item';
import { MdSubMenu } from '@material/web/menu/sub-menu';
import React from 'react';
export { MdMenu, MdMenuItem, MdSubMenu };

export const Menu = createComponent({
  react: React,
  tagName: 'md-menu',
  elementClass: MdMenu
});

export const MenuItem = createComponent({
  react: React,
  tagName: 'md-menu-item',
  elementClass: MdMenuItem
});

export const SubMenu = createComponent({
  react: React,
  tagName: 'md-sub-menu',
  elementClass: MdSubMenu
});
