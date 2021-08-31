import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware)) //배포용
    : composeWithDevTools(applyMiddleware(sagaMiddleware)); //개발용
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(sagas);

export default store;
