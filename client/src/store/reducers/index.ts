import { combineReducers } from 'redux';
import modals_reducer from './modals_reducer';
import todo_reducer from './todo_reducer';

const rootReducer = combineReducers({
  modal: modals_reducer,
  todo: todo_reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
