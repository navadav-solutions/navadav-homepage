export interface TextSegment {
  text: string;
  bold?: boolean;
}
export interface AboutData {
  id: number;
  title: string;
  description: TextSegment[];
  imageSrc: string;
  imageAlt: string;
  icon: string;
  reverse: boolean;
}

export interface Brand {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
}