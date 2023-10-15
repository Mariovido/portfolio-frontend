import { CONFIG } from './config';

export const setUp = () => {
  document.title = CONFIG.VITE_REACT_APP_WEB_TITLE ?? 'Portfolio';
};
