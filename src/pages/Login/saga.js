import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { setLogin, setToken } from '@containers/Client/actions';
import { LOGIN } from './constants';

function* doLogin({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const { data } = yield call(login, dataUser);

    yield put(setLogin(true));
    yield put(setToken(data.token));

    
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  // console.log(doRegister, '<<<< saga');
  yield takeLatest(LOGIN, doLogin);
}
