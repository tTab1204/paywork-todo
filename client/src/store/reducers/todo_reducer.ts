import { DELETE_TODOS, SHOW_TODOS, TOGGLE_TODOS } from 'store/types';

export default function todo_reducer(state = [], action: any) {
  switch (action.type) {
    case SHOW_TODOS:
      return { ...state, todos: action.todos };
    case DELETE_TODOS:
      return { ...state, todos: action.todos };
    case TOGGLE_TODOS:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
}
