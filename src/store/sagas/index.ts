import { all, takeLatest } from 'redux-saga/effects'
import { test } from './user'
import { USER_DATA_LOADED } from '../actions/types'

export default function* rootSaga() {
    yield all([
        takeLatest(USER_DATA_LOADED, test)
    ])
}