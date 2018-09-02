import { all, takeLatest } from 'redux-saga/effects'
import { handleAuth } from './user'
import { AUTH_SUCCESS } from '../actions/types'

export default function* rootSaga() {
    yield all([
        takeLatest(AUTH_SUCCESS, handleAuth)
    ])
}