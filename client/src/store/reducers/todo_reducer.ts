import { SHOW_TODOS } from 'store/types';

export default function modals_reducer(state = {}, action: any) {
  switch (action.type) {
    case SHOW_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}
