// https://testing-library.com/docs/react-testing-library/setup
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ToastProvider from "../contexts/ToastProvider";
import UserProvider from "../contexts/UserProvider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <ToastProvider>{children}</ToastProvider>
    </UserProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
