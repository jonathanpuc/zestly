// import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';

// import { rootHistory } from './history';
// import rootSaga from './sagas/index';
// import { rootReducer } from './reducers/index';


// const sagaMiddleware = createSagaMiddleware();
// const reduxRouterMiddleware = routerMiddleware(rootHistory);

// let store;
// let middleware = [sagaMiddleware, reduxRouterMiddleware];

// let quote = localStorage.getItem('navy-quote');
// let initialState = quote !== null ? { quote: JSON.parse(quote) } : {};

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//   store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(...middleware))
//   );


// sagaMiddleware.run(rootSaga);

// export default store;
