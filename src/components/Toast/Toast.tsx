import './Toast.css';

interface ToastProps {
  option: any;
}

const Toast: React.FC<ToastProps> = ({ option }) => {
  return (
    <div className={`toast ${option.type}`}>
      <p>{option.message}</p>
    </div>
  );
};

export default Toast;
