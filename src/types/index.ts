export interface Mask {
  id: number;
  path: string;
}
export interface NewMask {
  id: number;
  path: string;
  size: number;
}

export type MaskGroup = NewMask[]; 

export interface MaskLayer {
  id: number;
  path: string;
  size: number;
  colorBg: string;
  colorShade: string;
  width: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

export interface CanvasState {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  factor: number;
  orientation: number;
}
export interface CanvasAnimation {
  scale: number;
  rotation: number;
  x: number;
  y: number;
}
export interface Block {
  id: string;
  title?: string | undefined;
  titleHeader?: string | undefined;
  titleClass?: string | undefined;
  titleVariant?: string | undefined;
  blockVariant?: string | undefined;
  extraClass?: string | undefined;
}

export interface Media {
  id: string;
  title?: string | undefined;
  src: string;
  alt?: string | undefined;
  type?: string | undefined;
  media?: string | undefined;
}

export interface Picture {
  id: string;
  title?: string | undefined;
  sources: Media[];
  img: Media;
  caption?: string | undefined;
  showCaption?: boolean | undefined;
  tag: 'picture' | 'img';
}

export interface Video {
  id: string;
  title?: string | undefined;
  sources: Media[];
  caption?: string | undefined;
  showCaption?: boolean | undefined;
  tag: 'video';
}

export type Slide = Picture | Video; 




export interface Info {
  label: string; 
  value: string; 
  link?: string; 
  icon?: string; 
  hiddenLabel?: boolean
}

export interface Cover extends Picture {
  overlay?: string | undefined;
}

export interface TextBlock extends Block {
  
  type: 'BlockText';
  content: string;
}

export interface DataBlock extends Block {
  
  type: 'BlockGraph' | 'BlockTable' | 'BlockTags' | 'BlockProgress';
  content: [{ label: string; value: number }];
}
export interface InfoBlock extends Block {
  type: 'BlockInfo';
  content: Info[];
}
export interface ListBlock extends Block {
  
  type: 'BlockList';
  listOrdination?: 'ol' | 'ul' |  undefined;
  content: string[];
}

export type BlockTypes = TextBlock | DataBlock | InfoBlock | ListBlock;

export interface BlockGroup extends Block{
  blocks: Partial<BlockTypes>[];
}

export interface Tab {
  id: number;
  title: string;
  slug: string;
  label: string;
  sections: BlockGroup[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  content: string;
  subtitle?: string;
  infos?: Info[];
  link?: string;
  source?: string;
  cover?: Cover;
  gallery?: Slide[];
}