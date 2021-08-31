import styled from 'styled-components';

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
