import { IconEnum } from '../../../../enums/IconEnum';

export interface Icon {
  id: string;
  name: IconEnum;
  link: string;
  target?: string;
}

export interface IconProps {
  iconProps: Icon;
}
