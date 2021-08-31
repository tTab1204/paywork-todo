import { DELETE_TODOS, SHOW_TODOS, TOGGLE_TODOS, UPDATE_TODOS } from 'store/types';

export const showTodos = () => {
  return {
    type: SHOW_TODOS,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODOS,
    id,
  };
};

export const updateTodo = (id: number) => {
  return {
    type: UPDATE_TODOS,
    id,
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODOS,
    id,
  };
};
