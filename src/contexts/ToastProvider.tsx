import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/ui/Toast";

interface IToastContext {
  addToast: (prev) => void;
}

const ToastContext = createContext<IToastContext | undefined>(undefined);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = (toast) => {
    // lazy id
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
    // first allow toast to display for 3s before dissmissing
    setTimeout(() => {
      // second remove toast from data after its transition from screen
      setTimeout(() => {
        setToasts((prev) => prev.filter((e) => e.id !== id));
        // 300 (3ms) matches tailwind duration
      }, 300);
      // 3000 (3s) matches css timing function
    }, toast.duration || 3000);
  };

  const removeToast = ({ id }: any) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-0 right-0 flex flex-col ">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            id={toast.id}
            show={toast.show}
            onClose={() => removeToast(toast.id)}
            title={toast.title}
            description={toast.description}
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
