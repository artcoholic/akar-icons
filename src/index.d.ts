/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const Anchor: Icon;
export const AlignRight: Icon;
export const AlignLeft: Icon;
export const AlignJustify: Icon;
export const AlignCenter: Icon;
export const AlertTriangle: Icon;
export const AlertOctagon: Icon;
export const AlertCircle: Icon;
export const Airplay: Icon;
export const Activity: Icon;
export const Image: Icon;
export const Folder: Icon;
export const CloudLightning: Icon;
export const Database: Icon;
export const Crosshair: Icon;
export const Crop: Icon;
export const CloudDrizzle: Icon;
export const ZoomOut: Icon;
export const Key: Icon;
export const HelpCircle: Icon;
export const Heart: Icon;
export const Headphones: Icon;
