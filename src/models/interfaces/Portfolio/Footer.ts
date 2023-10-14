export interface Footer {
  paragraph: string;
  paragraphJSX?: JSX.Element;
  links?: {
    tag: string;
    name: string;
    url: string;
    target?: string;
  }[];
}
