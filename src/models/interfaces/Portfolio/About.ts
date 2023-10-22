import { Link } from '../shared/Common/Link';

export interface About {
  paragraphs: {
    id: string;
    paragraph: string;
    paragraphJSX?: JSX.Element;
    links?: Link[];
  }[];
}
