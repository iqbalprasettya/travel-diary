import { REGISTER } from './constants';

export const register = (dataUser, cbSuccess, cbFailed) => ({
  type: REGISTER,
  dataUser,
  cbSuccess,
  cbFailed,
});
