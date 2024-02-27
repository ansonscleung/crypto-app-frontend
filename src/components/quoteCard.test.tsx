import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "react-bootstrap/Card";

import QuoteCard from "./quoteCard";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

const MOCK_DATA = {
  name: "Bitcoin",
  price: 6602.60701122,
  volume: 4314444687.5194,
  change: 0.988615,
};

describe("<QuoteCard />", () => {
  it("renders title, price, volume components", () => {
    render(
      <QuoteCard
        name={MOCK_DATA.name}
        price={MOCK_DATA.price}
        volume={MOCK_DATA.volume}
        change={MOCK_DATA.change}
      />
    );
    const title = screen.getByText(MOCK_DATA.name);
    const price = screen.getByText(`\$${MOCK_DATA.price}`);
    const volume = screen.getByText(MOCK_DATA.volume);
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(volume).toBeInTheDocument();
  });
  it("renders change components with green colour if change > 0", () => {
    render(
      <QuoteCard
        name={MOCK_DATA.name}
        price={MOCK_DATA.price}
        volume={MOCK_DATA.volume}
        change={MOCK_DATA.change}
      />
    );
    const change = screen.getByText(MOCK_DATA.change);
    expect(change).toBeInTheDocument();
    expect(change).toHaveClass("text-success");
  });
  it("renders change components with red colour if change < 0", () => {
    render(
      <QuoteCard
        name={MOCK_DATA.name}
        price={MOCK_DATA.price}
        volume={MOCK_DATA.volume}
        change={-MOCK_DATA.change}
      />
    );
    const change = screen.getByText(-MOCK_DATA.change);
    expect(change).toBeInTheDocument();
    expect(change).toHaveClass("text-danger");
  });
  it("renders change components with black colour if change = 0", () => {
    render(
      <QuoteCard
        name={MOCK_DATA.name}
        price={MOCK_DATA.price}
        volume={MOCK_DATA.volume}
        change={0}
      />
    );
    const change = screen.getByText(0);
    expect(change).toBeInTheDocument();
    expect(change).toHaveClass("text-secondary");
  });
});
