import styled from 'styled-components';

export const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

export const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 110px;
  padding-bottom: 36px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

export const CircleButton = styled.button`
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
