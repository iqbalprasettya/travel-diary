import { takeLatest, call, put } from 'redux-saga/effects';

import { showPopup, setLoading } from '@containers/App/actions';
import { fetchPokemon, register } from '@domain/api';
import { setPokemon } from './actions';
import { FETCH_POKEMON, REGISTER } from './constants';

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(register, dataUser);
    // const user = {
    //   email: 'blabla'
    // }
    // cbSuccess && cbSuccess(user);
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  console.log(doRegister, '<<<< saga');
  yield takeLatest(REGISTER, doRegister);
}
