import { combineReducers } from 'redux';
import modals_reducer from './modals_reducer';
import toast_reducer from './toast_reducer';

const rootReducer = combineReducers({
  modal: modals_reducer,
  toast: toast_reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
