import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsersFailure, getUsersSucess, getUserSucess, getUserFailure } from '../actions/userActions';
import * as api from '../../apis'
function* getUsers() {
    try {
        const res = yield call(api.getUsers)
        yield put(getUsersSucess(res.data));
    } catch (error) {
        yield put(getUsersFailure());
    }
}

function* getUser(action) {
    console.log(action);
    try {
        const res = yield call(api.getUser, action.payload);
        yield put(getUserSucess(res.data));
    } catch (error) {
        yield put(getUserFailure());
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_START', getUsers)
    yield takeEvery('GET_USER_START', getUser)
}
export default userSaga;