import { SHOW_MODAL, CLOSE_MODAL } from 'store/types';

const INITIAL_STATE = {
  showModal: false,
  title: '',
};

export default function modals_reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        title: action.title,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}
