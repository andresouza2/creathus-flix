import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
})

// intercepting to capture errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message: string;

    switch (error.response.status) {
      case 401:
        message = 'Credênciais inválidas';
        break;
      case 403:
        message = 'Acesso Proibido';
        break;
      case 404:
        message = 'Desculpe! o dado pode está bloqueado ou não pode ser encontrado';
        break;
      default: {

        message = error.response && error.response.data ? error.response.data['message'] : error.message || error;
      }
    }
    if (message) {
      return { message: message }
    } else {
      return Promise.reject(error);
    }
  }
);

export { api }
