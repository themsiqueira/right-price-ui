import axios from 'axios';

const customAPI = (dynamicURL: string) => {
  const api = axios.create({
    baseURL: dynamicURL,
    responseType: 'json',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  });

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
  return api;
};

export { customAPI };
