export interface Mask {
  id?: number | undefined;
  svgcode?: string | undefined;
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
  content: [{ label: string; value: string; link?: string; icon?: string; hiddenLabel?: boolean }];
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
  year: number;
  tags: string[];
  content: string;
  subtitle?: string;
  design?: string;
  development?: string;
  link?: string;
  cover?: string;
  gallery?: string[];
}