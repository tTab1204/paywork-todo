import { call, put, takeLatest } from 'redux-saga/effects';
import { DELETE_TODOS, SHOW_TODOS, TOGGLE_TODOS } from 'store/types';
import { deleteTodoAPI, showTodoAPI, toggleTodoAPI } from 'utils/api';

export function* showTodos(): any {
  try {
    const response = yield call(showTodoAPI);

    yield put({
      type: SHOW_TODOS,
      todos: response.data.todos,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* deleteTodos(action: any): any {
  try {
    const response = yield call(deleteTodoAPI, action.id);

    yield put({
      type: DELETE_TODOS,
      todos: response.data.todos,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* remove() {
  yield takeLatest(DELETE_TODOS, deleteTodos);
}

export function* toggleTodos(action: any): any {
  try {
    const response = yield call(toggleTodoAPI, action.id);

    yield put({
      type: TOGGLE_TODOS,
      todos: response.data.todos,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* toggle() {
  yield takeLatest(TOGGLE_TODOS, toggleTodos);
}
