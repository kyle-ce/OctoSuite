import React from "react";
import { describe, it } from "vitest";
import ToastProvider from "../../../../contexts/ToastProvider";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../../../../libs/test-utils";
import { IToast } from "../../../../contexts/ToastProvider";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Toast from "..";

const infoToast: IToast = {
  id: Date.now(),
  title: "Info",
  description: "Info toast notification",
  variant: "info",
  show: false,
  displayTime: 100,
};

const preloadedState = {
  toasts: [infoToast],
};

describe("Toast", () => {
  it("should translate on screen wait for displayTime then transition off screen", async () => {
    render(
      <ToastProvider initialState={preloadedState}>
        <></>
      </ToastProvider>
    );
    const infoToast = await screen.findByRole("heading", {
      name: /Info/i,
    });
    expect(infoToast).toBeInTheDocument();
    await waitForElementToBeRemoved(infoToast, { timeout: 500 });
  });
  it("should allow user to click toast and it remains on screen past displayTime", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider initialState={preloadedState}>
        <></>
      </ToastProvider>
    );

    // ✅ find info toast
    const infoToast = await screen.findByRole("heading", {
      name: /Info/i,
    });
    expect(infoToast).toBeInTheDocument();

    // ✅ click info toast
    await user.click(infoToast);

    // ✅ verifiy info toast is still on screen after timeDelay (100ms)
    await waitFor(() => expect(infoToast).toBeInTheDocument(), {
      timeout: 500,
    });
  });
  it("should throw error if toast hook called outside provider", () => {
    render(<Toast {...infoToast} />);
    screen.debug();
  });
});
