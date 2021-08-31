import React, { FC } from 'react';
import Header from 'components/Header/Header';
import TodoCreate from 'components/TodoCreate/TodoCreate';
import TodoList from 'components/TodoList/TodoList';

const Main: FC<any> = () => {
  return (
    <div>
      <Header />
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default Main;
