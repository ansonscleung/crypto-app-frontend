import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const MOCK_DATA = [
  {
    name: "Bitcoin",
    price: 6602.60701122,
    volume: 4314444687.5194,
    change: 0.988615,
  },
];

describe("<QuoteCard />", () => {
  it("renders page header", () => {
    render(<App />);
    const headerElement = screen.getByText("Cryptocurrency Realtime Price");
    expect(headerElement).toBeInTheDocument();
  });
  it("renders page loading", () => {
    render(<App />);
    const headerElement = screen.getByText("Loading...");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders page after API call finish", async () => {
    const unmockedFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve(new Response(JSON.stringify(MOCK_DATA)))
    );

    render(<App />);
    let title = await screen.findByText("Bitcoin");

    expect(title).toBeInTheDocument();
    global.fetch = unmockedFetch;
  });
});
