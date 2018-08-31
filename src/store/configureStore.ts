import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history'
import rootSaga from './sagas/index'
import { rootReducer } from './reducers/index'

import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

let store: any

const cachedData = localStorage.getItem('zestly')
const initialState = cachedData !== null ? cachedData : {}

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);




sagaMiddleware.run(rootSaga);

export default store;
