import { SHOW_MODAL, CLOSE_MODAL } from 'store/types';

const INITIAL_STATE = {
  showModal: false,
};

export default function modals_reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
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
