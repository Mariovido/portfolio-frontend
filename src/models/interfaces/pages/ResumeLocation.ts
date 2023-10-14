import { Location } from 'react-router-dom';

export interface ResumeLocation extends Location {
  state: { prevPath?: string };
}
