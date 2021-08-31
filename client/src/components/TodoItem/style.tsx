import styled, { css } from 'styled-components';

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  &:hover {
    background-color: #f0f0f0;
    ${Remove} {
      display: initial;
    }
  }
`;

export const CheckCircle = styled.div<{ isCheck: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #4c4177;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.isCheck &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

export const Text = styled.div<{ isCheck: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: #4c4177;
  flex: 1;
  ${(props) =>
    props.isCheck &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
