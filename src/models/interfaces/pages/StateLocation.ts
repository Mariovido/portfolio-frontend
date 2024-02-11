import { Location } from 'react-router-dom';

export interface StateLocation extends Location {
  state: { prevPath?: string };
}
