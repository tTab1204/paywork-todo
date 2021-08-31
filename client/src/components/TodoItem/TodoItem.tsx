import React from 'react';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { ITodo } from 'types/todo';
import { TodoItemBlock, CheckCircle, Text, Remove } from './style';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'store/actions/todo_action';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {};

  const deleteTodoItem = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TodoItemBlock>
      <CheckCircle isCheck={todo.isCheck} onClick={() => handleToggle(todo._id)}>
        {todo.isCheck && <CheckOutlined />}
      </CheckCircle>

      <Text isCheck={todo.isCheck}>{todo.content}</Text>

      <Remove onClick={() => deleteTodoItem(todo._id)}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
