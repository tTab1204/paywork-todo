import { SHOW_TOAST, CLOSE_TOAST } from 'store/types';

const INITIAL_STATE = {
  showToast: false,
  option: null,
};

export default function toast_reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        option: action.option,
      };
    case CLOSE_TOAST:
      return {
        ...state,
        showToast: false,
      };
    default:
      return state;
  }
}
