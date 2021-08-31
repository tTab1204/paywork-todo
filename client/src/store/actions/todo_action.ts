import { SHOW_TODOS } from 'store/types';
import axios from 'axios';

export const showTodos = () => {
  const request = axios.get('/api/todo/todo').then((res) => res.data);

  return {
    type: SHOW_TODOS,
    payload: request,
  };
};
