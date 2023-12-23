import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

const response = http.get("https://swapi.dev/api/people/", () => {
  return HttpResponse.json({ results: [{ name: "Luke Skywalker" }] });
});

const error500 = http.get("https://swapi.dev/api/people/", () => {
  return new HttpResponse(null, {
    status: 500,
  });
});

const error418 = http.get("https://swapi.dev/api/people/", () => {
  return new HttpResponse(null, {
    status: 418,
  });
});

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("renders first person", async () => {
    server.use(response);

    render(<App />);

    const element = await screen.findByTestId("name");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Luke Skywalker");
  });
  test("shows error 500", async () => {
    server.use(error500);
    render(<App />);

    const element = await screen.findByTestId("error");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(
      "Oops... something went wrong, try again 🤕"
    );
  });
  test("shows error 418", async () => {
    server.use(error418);
    render(<App />);
    const element = await screen.findByTestId("error");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("418 I'm a tea pot 🫖, silly");
  });
});
