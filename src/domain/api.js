import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  // ping: 'ping.json',
  login: 'user/login',
  register: 'user/register'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};


export const register = (dataUser) => {
  // console.log(dataUser, '<<< DATA USER API')
  return callAPI(urls.register, 'POST', {}, {}, dataUser);
}

export const login = (dataUser) => {
  // console.log(dataUser, '<<< DATA USER API')
  return callAPI(urls.login, 'POST', {}, {}, dataUser);
}