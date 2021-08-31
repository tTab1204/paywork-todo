import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { InsertFormPositioner, InsertForm, Input, CircleButton } from './style';

const TodoCreate = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
