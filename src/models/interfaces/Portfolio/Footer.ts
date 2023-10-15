import { Link } from '../shared/Common/Link';

export interface Footer {
  paragraph: string;
  paragraphJSX?: JSX.Element;
  links?: Link[];
}
