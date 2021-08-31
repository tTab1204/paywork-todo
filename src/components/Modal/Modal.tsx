import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CloseModalButton, CreateModal } from './style';
import { closeModal, showModal } from 'store/actions/modals_action';

const Modal: FC<any> = ({ children }) => {
  const dispatch = useDispatch();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onShowModal = () => {
    dispatch(showModal());
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <CreateModal onClick={onShowModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
