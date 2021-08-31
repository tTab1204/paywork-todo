import { call, put, takeLatest } from 'redux-saga/effects';
import { DELETE_TODOS, SHOW_TODOS } from 'store/types';
import { deleteTodoAPI, showTodoAPI } from 'utils/api';

export function* showTodos(): any {
  console.log('투두리스트 불러오기 성공');

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
  console.log('action.id: ', action.id);

  try {
    const response = yield call(deleteTodoAPI, action.id);
    console.log('response:', response);
    yield put({
      type: DELETE_TODOS,
      todos: response.data.todos,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* removeTodo() {
  yield takeLatest(DELETE_TODOS, deleteTodos);
}
