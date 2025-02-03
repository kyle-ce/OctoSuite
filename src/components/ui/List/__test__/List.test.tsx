import React from "react";
import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { render } from "../../../../libs/test-utils";
import List from "..";
import userEvent from "@testing-library/user-event";

describe("List", () => {
  it("should render", async () => {
    render(<List />);
    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /active repositories/i })
      ).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByText(/test1/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/test2/i)).toBeInTheDocument());
  });
  it("should show modal", async () => {
    const user = userEvent.setup();
    render(<List />);

    // select test1
    const test1Input = await waitFor(() =>
      screen.getByRole("checkbox", {
        name: /test1/i,
      })
    );
    await user.click(test1Input);
    expect(test1Input).toBeChecked();

    // click delete to show modal
    const button = screen.getByRole("button", { name: /delete \(1\)/i });
    await user.click(button);

    // verify modal in document
    const modal = screen.getByRole("heading", {
      name: /delete selected repositories \(1\)/i,
    });
    const validation = screen.getByRole("textbox");
    expect(modal).toBeInTheDocument();
    expect(validation).toBeInTheDocument();
  });
});
