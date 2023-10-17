import { Config } from '../models/interfaces/config/config';

export const CONFIG: Config = {
  VITE_REACT_APP_USE_SERVER:
    import.meta.env.VITE_REACT_APP_USE_SERVER === 'true',
  VITE_REACT_APP_WEB_TITLE: import.meta.env.VITE_REACT_APP_WEB_TITLE,
  VITE_REACT_APP_BASE_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
};
