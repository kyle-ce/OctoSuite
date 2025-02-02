import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../libs/test-utils";
import Login from "..";

describe("Login", () => {
  it("should render", () => {
    render(<Login />);
    expect(screen.getByRole("heading", { name: /pat/i }));
    expect(
      screen.getByText(/enter your personal access token to get started/i)
    );
    expect(screen.getByPlaceholderText(/your\-personal\-access\-token/i));
    screen.getByRole("button", { name: /login/i });
  });
  it("should be interactive", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const input = screen.getByPlaceholderText(/your\-personal\-access\-token/i);
    // await user.click(input);
    await user.type(input, "xxx{Enter}");
    expect(input).toHaveValue("xxx");
    screen.debug();
  });
});
