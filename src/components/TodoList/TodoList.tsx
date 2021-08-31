import React from 'react';
import { TodoListBlock } from './style';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
};

export default TodoList;
