import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoListBlock } from './style';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    axios.get('/api/todo/todo').then((res) => {
      if (res.data.success) {
        setTodos(res.data.todos);
      } else {
        console.error(res);
      }
    });
  }, []);

  return (
    <TodoListBlock>
      {todos?.map((todo: any) => (
        <TodoItem key={todo.id} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
