import { createComponent } from '@lit/react';
import { MdAssistChip } from '@material/web/chips/assist-chip';
import { MdChipSet } from '@material/web/chips/chip-set';
import { MdFilterChip } from '@material/web/chips/filter-chip';
import { MdInputChip } from '@material/web/chips/input-chip';
import { MdSuggestionChip } from '@material/web/chips/suggestion-chip';
import React from 'react';
export { MdAssistChip, MdChipSet, MdFilterChip, MdInputChip, MdSuggestionChip };

export const AssistChip = createComponent({
  react: React,
  tagName: 'md-assist-chip',
  elementClass: MdAssistChip
});

export const ChipSet = createComponent({
  react: React,
  tagName: 'md-chip-set',
  elementClass: MdChipSet
});

export const FilterChip = createComponent({
  react: React,
  tagName: 'md-filter-chip',
  elementClass: MdFilterChip
});

export const InputChip = createComponent({
  react: React,
  tagName: 'md-input-chip',
  elementClass: MdInputChip
});

export const SuggestionChip = createComponent({
  react: React,
  tagName: 'md-suggestion-chip',
  elementClass: MdSuggestionChip
});
