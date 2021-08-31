import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  padding: 0.8rem 2rem;
  z-index: 200;
  background-color: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
`;

export const NavbarWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: #fafafa;
    font-size: 1.8rem;
    height: 50px;
    min-width: 50px;
    cursor: pointer;
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1rem;

  & > button {
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1.125rem;
    color: #fafafa;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  & > span {
    display: flex;
    font-size: 1.8rem;
  }
`;
