import { instance } from './config';

export const setAuthHeader = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = token;
  }
};

export const unsetAuthHeader = () => {
  delete instance.defaults.headers.common['Authorization'];
};
