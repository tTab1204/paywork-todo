import Modal from 'components/Modal/Modal';
import Toast from 'components/Toast/Toast';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from 'store/actions/modals_action';
import { showToast } from 'store/actions/toast_action';
import { RootState } from 'store/reducers';

const App: React.FC<any> = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal);
  const toast = useSelector((state: RootState) => state.toast);

  const [toastMessage, setToastMessage] = useState('');

  const onChangeModalInput = (e: any) => {
    setToastMessage(e.target.value);
  };

  const onHandleToast = () => {
    const variable = {
      message: toastMessage,
      type: 'info',
    };

    dispatch(showToast(variable));
  };

  const onHandleModal = () => {
    dispatch(showModal());
  };

  return (
    <div>
      <input value={toastMessage} onChange={onChangeModalInput} />
      <button onClick={onHandleToast}>토스트 띄우기</button>
      <button onClick={onHandleModal}>모달 열기</button>
      {modal.showModal && <Modal />}
      {toast.showToast && <Toast option={toast.option} />}
    </div>
  );
};

export default App;
