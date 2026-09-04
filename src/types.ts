import { ComponentType } from 'react';

export type ComponentCategory =
  | 'tutti'
  | 'header'
  | 'hero'
  | 'footer'
  | 'card'
  | 'griglie'
  | 'bottoni'
  | 'modali'
  | 'video'
  | 'audio'
  | 'blocknote';

export type ViewportMode = 'responsive' | 'desktop' | 'tablet' | 'mobile';

export interface ComponentItem {
  id: string;
  name: string;
  category: ComponentCategory;
  categoryLabel: string;
  description: string;
  shape: string;
  colorPalette: string[];
  component: ComponentType;
  code: string;
  tags: string[];
  specialFeature?: string;
}
