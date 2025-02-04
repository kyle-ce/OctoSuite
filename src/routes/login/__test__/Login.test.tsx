import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../libs/test-utils";
import Login from "..";
import ToastProvider from "../../../contexts/ToastProvider";
import UserProvider from "../../../contexts/UserProvider";
import List from "../../../components/ui/List";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { beforeAll, afterEach, afterAll } from "vitest";

const server = setupServer(
  http.get("https://api.github.com/user", () => {
    return HttpResponse.json(null, { status: 200 });
  })
);

describe("Login", () => {
  it("should render", () => {
    render(<Login />);
    expect(screen.getByRole("heading", { name: /pat/i })).toBeInTheDocument();
    expect(
      screen.getByText(/enter your personal access token to get started/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/your\-personal\-access\-token/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
  it("should login", async () => {
    const user = userEvent.setup();
    render(
      <UserProvider>
        <Login />
        <List />
      </UserProvider>
    );
    const input = screen.getByPlaceholderText(/your\-personal\-access\-token/i);
    // await user.click(input);
    await user.type(input, "xxx");
    expect(input).toHaveValue("xxx");

    // ✅ click login
    const login = screen.getByRole("button", { name: /login/i });
    await user.click(login);

    // ✅ find user name with mock response in handlers
    const username = await screen.findByText(/kyle\-ce 19 repositories/i);
    expect(username).toBeInTheDocument();
  });
  it("should display error if user does not input PAT", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <Login />
      </ToastProvider>
    );
    // ✅ find login button and try to login with no PAT
    const login = screen.getByRole("button", {
      name: /login/i,
    });
    await user.click(login);

    // ✅ find error toast
    const error = await screen.findByRole("heading", {
      name: /Failed to login/i,
    });
    expect(error).toBeInTheDocument();
  });
  it("should fail fetching user details ", async () => {
    // ✅ change mock response so it returns a fail 500 status
    server.resetHandlers();
    server.use(
      http.get("https://api.github.com/user", () => {
        // const controller = new AbortController();
        console.log("Intercepted by MSW!");
        return new HttpResponse(null, { status: 500 });
        // fetch automatically retries 3 times every 10s
        // this is not ideal for testing as this will hang test suite
        // aborting request mid flight will make request fail in 10ms
        // server.resetHandlers();
        // setTimeout(() => controller.abort(), 100);
        // return new Promise((_, reject) => {
        //   reject(new Error("Request aborted"));
        // });

        // return new HttpResponse(null, { status: 500 });
      })
    );
    server.events.on("request:start", (req) => {
      console.log("Request started:", req);
    });
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <Login />
      </ToastProvider>
    );
    // ✅ type in PAT (does not matter as fetch reqeust is mocked)
    const input = screen.getByPlaceholderText(/your\-personal\-access\-token/i);
    await user.type(input, "xxx");
    expect(input).toHaveValue("xxx");

    // ✅ click login
    const login = screen.getByRole("button", { name: /login/i });
    await user.click(login);

    // ✅ find failed response
    const errorToast = await screen.findByText(
      /failed to retreived user details/i
    );
    expect(errorToast).toBeInTheDocument();
  });
});
