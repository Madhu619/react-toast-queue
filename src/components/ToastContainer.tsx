import { ToastId, ToastType } from "../types/ToastTypes";
import Toast from "./Toast";

interface ToastContainerProps {
  toasts: ToastType[];
  removeToast: (id: ToastId) => void;
}

const ToastContainer = ({ toasts, removeToast }: ToastContainerProps) => {
  return (
    <div className="toast-container">
      {toasts.map((toast: ToastType) => (
        <Toast key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default ToastContainer;
