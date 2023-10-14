import { NavBarProp } from '../shared/Navigation/NavBarProps';
import { Icon } from '../shared/UI/Icons/IconProps';

export interface Header {
  name: string;
  role: string;
  description: string;
  navBarProps: NavBarProp[];
  iconListProps: Icon[];
}
