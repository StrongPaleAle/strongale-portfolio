export interface Mask {
  id?: number | undefined;
  svgcode?: string | undefined;
}

export interface Block {
  id: string;
  title?: string | undefined;
}
export interface TextBlock extends Block {
  
  type: 'BlockText';
  content: string;
}

export interface GraphBlock extends Block {
  
  type: 'BlockGraph';
  content: [{ label: string; value: number }];
}
export interface ListBlock extends Block {
  
  type: 'BlockList';
  listOrdination?: 'ordered' | 'unordered' | undefined;
  content: string[];
}

export type BlockTypes = TextBlock | GraphBlock | ListBlock;

export interface BlockGroup {
  id: string;
  title?: string | undefined;
  blocks: Partial<BlockTypes>[];
}

export interface Tab {
  id: number;
  title: string;
  slug: string;
  label: string;
  sections: BlockGroup[];
}