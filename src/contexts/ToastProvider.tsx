import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/ui/Toast";

interface IToastContext {
  addToast: (prev) => void;
  removeToast: (id) => void;
}
export interface IToast {
  id: number;
  title: string;
  description: string;
  variant: "alert" | "error" | "info";
  show: boolean;
  displayTime: number;
}
interface IToastProvider {
  children: React.ReactNode;
  initialState?: { toasts: IToast[] | [] };
}

const ToastContext = createContext<IToastContext | undefined>(undefined);
const initState = { toasts: [] };

const ToastProvider = ({
  children,
  initialState = initState,
}: IToastProvider) => {
  const [toasts, setToasts] = useState<any[]>(initialState.toasts);

  const addToast = (toast) => {
    // lazy id
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: any) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-0 right-0 flex flex-col ">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            id={toast.id}
            show={toast.show}
            title={toast.title}
            description={toast.description}
            displayTime={toast?.displayTime}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error("Must be inside ToastProvider to call hook");
  return toast;
};

export default ToastProvider;
