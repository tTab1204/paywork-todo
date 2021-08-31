import { DELETE_TODOS, SHOW_TODOS, TOGGLE_TODOS } from 'store/types';

export default function todo_reducer(state = [], action: any) {
  switch (action.type) {
    case SHOW_TODOS:
      return { ...state, todos: action.todos };
    case DELETE_TODOS:
      return { ...state, todos: action.todos?.filter((todo: any) => todo._id !== action.id) };
    case TOGGLE_TODOS:
      return {
        ...state,
        todos: action.todos?.map((todo: any) =>
          todo._id === action.id ? { ...todo, isCheck: !todo.isCheck } : todo,
        ),
      };
    default:
      return state;
  }
}
