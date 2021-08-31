import React, { useEffect, useState } from 'react';
import { TodoListBlock } from './style';

import { useDispatch, useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';
import { showTodos } from 'store/actions/todo_action';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos);

  useEffect(() => {
    const loadTodos = async () => {
      await dispatch(showTodos());
    };

    dispatch(showTodos());
    loadTodos();
  }, [dispatch]);

  return (
    <TodoListBlock>
      {todos?.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
