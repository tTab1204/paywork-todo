import { all } from 'redux-saga/effects';
import { showTodos, removeTodo } from './todos';

function* rootSaga() {
  yield all([showTodos(), removeTodo()]);
}

export default rootSaga;
