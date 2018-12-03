import { takeEvery, put } from 'redux-saga/effects';

import user from './';

function* getRegisteredUser(action) {
  try {
  /*   const list = yield fetch(
      `/api/users/`,
      {
        method: 'GET',
      },
    ).then(response => response.json());
*/
  const list= [{id: 1, role: 'operator'}, {id: 2, role: 'collector'}];
    yield put(user.actions.getUserResponse(list));
  } catch (e) {
    yield put(
        user.actions.getUserResponse(new Error(e.message)),
    );    
  }
}

function* watchUserSagas() {
  const { actions } = user;
  yield takeEvery(actions.GET_USER_LIST, getRegisteredUser);
}

export default watchUserSagas;
