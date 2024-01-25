import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { register } from '@domain/api';

import { REGISTER } from './constants';
import { setLogin } from '@containers/Client/actions';

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const { data } = yield call(register, dataUser)
    yield put(setLogin({
      login: true,
      token: data.token
    }))

  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  // console.log(doRegister, '<<<< saga');
  yield takeLatest(REGISTER, doRegister);
}
