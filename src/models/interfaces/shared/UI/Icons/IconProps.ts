import { IconEnum } from '../../../../enums/IconEnum';

export interface Icon {
  id: string;
  name: IconEnum;
  href: string;
  target?: string;
}

export interface IconProps {
  iconProps: Icon;
}
