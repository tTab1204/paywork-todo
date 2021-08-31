import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoListBlock } from './style';
import { useDispatch } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';
import { showTodos } from 'store/actions/todo_action';

const TodoList = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState<any>([]);

  const getTodos = () => {
    dispatch(showTodos());
  };

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
