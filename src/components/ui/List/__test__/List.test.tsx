import React from "react";
import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { render } from "../../../../libs/test-utils";
import List from "..";
import userEvent from "@testing-library/user-event";
import UserProvider from "../../../../contexts/UserProvider";
import ToastProvider from "../../../../contexts/ToastProvider";
import { server } from "../../../../mocks/server";
import { http } from "msw";
import { HttpResponse } from "msw";

const validUser = {
  user: "kyle-ce",
  token: "xxx",
  isLoggingin: false,
};

const invalidUser = {
  user: "",
  token: "",
  isLoggingin: false,
};

describe("List", () => {
  it("should render the list with active repositories", async () => {
    render(
      <UserProvider initalUser={validUser}>
        <List />
      </UserProvider>
    );
    // ✅ Wait for the heading to appear (indicating the component has loaded)
    const heading = await screen.findByRole("heading", {
      name: /active repositories/i,
    });
    expect(heading).toBeInTheDocument();

    // ✅ Verify repositories are rendered
    expect(
      await screen.findByText(/test-successfully-delete-this-repo/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/test-fail-delete-this-repo/i)
    ).toBeInTheDocument();
  });

  it("should delete a repository", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <UserProvider initalUser={validUser}>
          <List />
        </UserProvider>
      </ToastProvider>
    );

    // ✅ Select "test-successfully-delete-this-repo" checkbox
    const test1Checkbox = await screen.findByRole("checkbox", {
      name: /test-successfully-delete-this-repo/i,
    });
    await user.click(test1Checkbox);
    expect(test1Checkbox).toBeChecked();

    // ✅ Click "Delete (1)" button to open modal
    const deleteButton = screen.getByRole("button", { name: /delete \(1\)/i });
    await user.click(deleteButton);

    // ✅ Verify modal appears
    const modalHeading = await screen.findByRole("heading", {
      name: /delete selected repositories \(1\)/i,
    });
    const validationInput = screen.getByRole("textbox");
    expect(modalHeading).toBeInTheDocument();
    expect(validationInput).toBeInTheDocument();

    // ✅ Type username in validation input
    await user.type(validationInput, "kyle-ce");

    // ✅ Click final "Delete" button
    const confirmDeleteButton = screen.getByRole("button", { name: "Delete" });
    await user.click(confirmDeleteButton);

    // ✅ Verify toast notification appears
    await screen.findByRole("heading", {
      name: /Successfully Deleted 1 Repositories/i,
    });

    // ✅ Verify "test1" checkbox is removed
    await waitFor(() =>
      expect(
        screen.queryByRole("checkbox", {
          name: /test-successfully-delete-this-repo/i,
        })
      ).not.toBeInTheDocument()
    );
  });
  it("should select all repositories and clear selected all", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <UserProvider initalUser={validUser}>
          <List />
        </UserProvider>
      </ToastProvider>
    );

    // ✅ Find all checkboxes
    let checkboxes = await screen.findAllByRole("checkbox");
    const selectAllCheckbox = checkboxes.find((el) => el.id === "select-all");

    // verify select all box exists to prevent type errors
    if (!selectAllCheckbox) {
      throw new Error("Select All checkbox not found");
    }

    // ✅ Click "Select All" checkbox
    await user.click(selectAllCheckbox);
    expect(selectAllCheckbox).toBeChecked();

    // ✅ Verify all checkboxes are checked
    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });

    // ✅ Click "Select All" again checkbox to clear all selected
    await user.click(selectAllCheckbox);
    expect(selectAllCheckbox).not.toBeChecked();

    // ✅ Verify all checkboxes are not checked
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
    // ✅ Verify checkboxes are selectable and unselectable
    const checkbox = checkboxes[1];
    await user.click(checkboxes[1]);
    expect(checkbox).toBeChecked();
    await user.click(checkboxes[1]);
    expect(checkbox).not.toBeChecked();
  });
  it("should fail to delete repository", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <UserProvider initalUser={validUser}>
          <List />
        </UserProvider>
      </ToastProvider>
    );
    // ✅ Select "test-fail-delete-this-repo" checkbox
    const failRepo = await screen.findByRole("checkbox", {
      name: /test-fail-delete-this-repo/i,
    });
    await user.click(failRepo);
    expect(failRepo).toBeChecked();

    // ✅ Click "Delete (1)" button to open modal
    const deleteButton = screen.getByRole("button", { name: /delete \(1\)/i });
    await user.click(deleteButton);

    // ✅ Verify modal appears
    const modalHeading = await screen.findByRole("heading", {
      name: /delete selected repositories \(1\)/i,
    });
    const validationInput = screen.getByRole("textbox");
    expect(modalHeading).toBeInTheDocument();
    expect(validationInput).toBeInTheDocument();

    // ✅ Type username in validation input
    await user.type(validationInput, "kyle-ce");

    // ✅ Click final "Delete" button
    const confirmDeleteButton = screen.getByRole("button", { name: "Delete" });
    await user.click(confirmDeleteButton);

    // ✅ Verify toast notification appears
    await screen.findByRole("heading", { name: /failed deleteing/i });

    // ✅ Verify "test1" checkbox is removed
    await waitFor(() =>
      expect(
        screen.queryByRole("checkbox", {
          name: /test-fail-delete-this-repo/i,
        })
      ).toBeInTheDocument()
    );
  });
  it("should not load list of repositories if user is invalid", async () => {
    render(
      <UserProvider initalUser={invalidUser}>
        <List />
      </UserProvider>
    );

    // ✅ try to find header of list (indicating user creds loaded repositories)
    const heading = screen.queryByRole("heading", {
      name: /active repositories/i,
    });

    // ✅ expect not to find it
    expect(heading).not.toBeInTheDocument();
  });
  it("should fail to fetch repositories", async () => {
    // ✅ change mock response so it returns a fail 400 status
    server.use(
      http.get("https://api.github.com/user/repos", () => {
        console.log("🚨 MSW: Simulating Server Error");
        return HttpResponse.json({ message: "Mock fail" }, { status: 400 });
      })
    );
    render(
      <UserProvider initalUser={validUser}>
        <List />
      </UserProvider>
    );

    // ✅ Verify 0 repositorys were returned
    let subheading = await screen.findByText(/kyle\-ce 0 repositories/i);
    expect(subheading).toBeInTheDocument();

    // ✅ expect to find error banner for failed fetch
    let error = await screen.findByRole("heading", {
      name: /failed to fetch data/i,
    });
    expect(error).toBeInTheDocument();
  });
});
