import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import ToastContainer from "../components/ToastContainer";
import { ToastId, ToastInput, ToastType, ToastTypes } from "../types/ToastTypes";

export interface ToastContextProp {
  addToast: (toast: ToastInput) => void;
}

const ToastContext = createContext<ToastContextProp | null>(null);

const DEFAULT_DURATION_MS = 5000;

const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback(({
    title,
    type = ToastTypes.Info,
    description = "",
    duration = DEFAULT_DURATION_MS,
  }: ToastInput) => {
    const id = crypto.randomUUID();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, title, type, description, duration },
    ]);
  }, []);

  const removeToast = useCallback((id: ToastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Component should be wrapped inside ToastContextProvider");
  }
  return context;
};

export { useToast, ToastContextProvider };
