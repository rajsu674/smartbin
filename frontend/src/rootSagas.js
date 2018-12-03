import { fork } from 'redux-saga/effects';
import user from './user/view';

function* watchAllActions() {
    yield fork(user.saga);
}

export default watchAllActions;