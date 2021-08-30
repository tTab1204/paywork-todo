import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/actions/modals_action';
import './Modal.css';

interface ModalProps {
  title: string;
}

const Modal: React.FC<ModalProps> = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div className="Modal">
      <h1>{title}</h1>

      <button onClick={() => dispatch(closeModal())}>닫기</button>
    </div>
  );
};

export default Modal;
