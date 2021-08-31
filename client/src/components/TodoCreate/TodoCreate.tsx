import React, { useState } from 'react';
import axios from 'axios';
import { PlusCircleOutlined } from '@ant-design/icons';
import { InsertFormPositioner, InsertForm, Input, CircleButton } from './style';

const TodoCreate = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const variables = {
      content: value,
      isCheck: false,
    };

    try {
      const res = await axios.post('/api/todo/create-todo', variables);
      console.log(res);
      setValue('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <InsertFormPositioner>
      <InsertForm onSubmit={handleSubmit}>
        <Input autoFocus placeholder="할 일 추가" onChange={handleChange} value={value} />
        <CircleButton>
          <PlusCircleOutlined />
        </CircleButton>
      </InsertForm>
    </InsertFormPositioner>
  );
};

export default TodoCreate;
