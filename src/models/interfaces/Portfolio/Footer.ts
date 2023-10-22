import { Link } from '../shared/Common/Link';

export interface Footer {
  paragraphs: {
    id: string;
    paragraph: string;
    paragraphJSX?: JSX.Element;
    links?: Link[];
  }[];
}
