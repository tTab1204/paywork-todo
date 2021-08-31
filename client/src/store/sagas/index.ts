import { all } from 'redux-saga/effects';
import { showTodos, remove, toggle } from './todos';

function* rootSaga() {
  yield all([showTodos(), remove(), toggle()]);
}

export default rootSaga;
