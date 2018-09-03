import { all, takeLatest } from 'redux-saga/effects'
import { handleAuth } from './user'
import { HANDLE_AUTH } from '../actions/types'

export default function* rootSaga() {
    yield all([
        takeLatest(HANDLE_AUTH, handleAuth)
    ])
}