import React from 'react';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { ITodo } from 'types/todo';
import { TodoItemBlock, CheckCircle, Text, Remove } from './style';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from 'store/actions/todo_action';
import { showTodos } from 'store/sagas/todos';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  // Todo 완료 기능
  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
    dispatch(showTodos());
  };

  // Todo 삭제 기능
  const deleteTodoItem = (id: number) => {
    dispatch(deleteTodo(id));
    dispatch(showTodos());
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
