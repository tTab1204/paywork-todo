import { SHOW_TOAST, CLOSE_TOAST } from 'store/types';

export const showToast = (option: any) => {
  return {
    type: SHOW_TOAST,
    option,
  };
};

export const closeToast = () => {
  return { type: CLOSE_TOAST };
};
