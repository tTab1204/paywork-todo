import React, { FC } from 'react';
import Header from 'components/Header/Header';
import TodoCreate from 'components/TodoCreate/TodoCreate';
import TodoList from 'components/TodoList/TodoList';
import { MainContainer } from './style';

const Main: FC<any> = () => {
  return (
    <MainContainer>
      <Header />
      <TodoCreate />
      <TodoList />
    </MainContainer>
  );
};

export default Main;
