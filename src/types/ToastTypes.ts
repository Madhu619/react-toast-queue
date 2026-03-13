export enum ToastTypes {
  Success = "Success",
  Failure = "Failure",
  Info = "Info",
}

export type ToastId = string;

export type ToastInput = {
  title: string;
  type?: ToastTypes;
  description?: string;
  duration?: number;
};

export type ToastType = {
  id: ToastId;
  title: string;
  type: ToastTypes;
  description?: string;
  duration?: number;
};

export type ToastsProps = {
  toast: ToastType;
  removeToast: (id: ToastId) => void;
};
