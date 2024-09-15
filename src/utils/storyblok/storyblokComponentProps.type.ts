export interface ISbComponentType {
  _uid?: string;
  component?: string;
  _editable?: string;
}

export type StoryblokComponentProps<T extends ISbComponentType> = {
  blok: T;
};
