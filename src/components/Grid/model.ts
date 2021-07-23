export const enum EMods {
  IMAGE = 'image',
  IMAGE_RIGHT = 'image-right',
  BG_COLOR = 'bg-color',
  SHOW_BTN = 'show-btn',
}

export interface ITag {
  title: string,
  styles: {
    backgroundColor: string;
  };
}

export const ITag = undefined;

export interface ICell {
  title: string;
  tags: Array<ITag>;
  description?: string;
  image?: string;
  link?: string;
  mods?: Array<string>, 
  stylesCell?: {
    backgroundColor?: string;
    gridRow?: string;
    gridColumn?: string;
  },
}

export const ICell = undefined;

export interface IGridStyle {
  gridTemplateColumns?: String;
  gridAutoRows?: String; 
  gridGap?: String, 
}

export const IGridStyle = undefined;