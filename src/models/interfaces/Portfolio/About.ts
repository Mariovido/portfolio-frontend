import { Link } from '../shared/Common/Link';

export interface About {
  paragraphs: {
    id: string;
    description: string;
    paragraphJSX?: JSX.Element;
    links?: Link[];
  }[];
}
