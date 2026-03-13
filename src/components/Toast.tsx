import { useEffect } from "react";
import { ToastsProps } from "../types/ToastTypes";

const Toast = ({ toast, removeToast }: ToastsProps) => {
  useEffect(() => {
    const duration = toast.duration ?? 5000;
    const timeout = window.setTimeout(() => removeToast(toast.id), duration);
    return () => clearTimeout(timeout);
  }, [removeToast, toast.duration, toast.id]);

  return (
    <div className={`toast-body toast-${toast.type}`}>
      <div>
        <strong>{toast.title}</strong>
        <span className="close-btn" onClick={() => removeToast(toast.id)}>
          x
        </span>
      </div>
      <p>{toast.description}</p>
    </div>
  );
};

export default Toast;
