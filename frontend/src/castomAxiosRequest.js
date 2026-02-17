import axios from "axios";

export const authAxiosRequest = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});


authAxiosRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Перехватчик ответов
authAxiosRequest.interceptors.response.use(
  (response) => {
    console.log('Ответ получен:', response);
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('Требуется авторизация');
          break;
        case 404:
          console.log('Ресурс не найден');
          break;
        case 500:
          console.log('Внутренняя ошибка сервера');
          break;
        default:
          console.log('Ошибка:', error.response.data);
      }
    } else if (error.request) {
      console.log('Сервер не отвечает');
    } else {
      console.log('Ошибка запроса:', error.message);
    }
    return Promise.reject(error);
  }
);