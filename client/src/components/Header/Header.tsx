import React from 'react';
import { LeftBox, NavbarContainer, NavbarWrapper, RightBox } from './style';
import { HomeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from 'store/actions/modals_action';
import { RootState } from 'store/reducers';
import Modal from 'components/Modal/Modal';

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);

  const onHandleModal = () => {
    dispatch(showModal());
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LeftBox>
          sada
          <HomeOutlined />
        </LeftBox>
        <RightBox>
          <button onClick={onHandleModal}>할 일 추가</button>
        </RightBox>
      </NavbarWrapper>
      {modal.showModal && <Modal />}
    </NavbarContainer>
  );
};

export default Header;
