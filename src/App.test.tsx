import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

const handlers = [
  http.get("https://swapi.dev/api/people/", () => {
    return HttpResponse.json([{ name: "haha" }]);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("renders learn react link", async () => {
    render(<App />);
    const linkElement = await screen.findByTestId("name");
    expect(linkElement).toBeInTheDocument();
  });
});
