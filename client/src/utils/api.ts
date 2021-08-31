import axios from 'axios';

export const showTodoAPI = () => axios.get('/api/todo/show-todo');
export const deleteTodoAPI = (id: number) => axios.post('/api/todo/delete-todo', id);
