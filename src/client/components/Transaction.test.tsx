import { render, screen } from "@testing-library/react";
import { Transaction } from "./Transaction";
import { describe, it, expect } from "vitest";

const MOCK_TRANSACTION = { amount: 100, description: "test" };

describe("Transaction", () => {
  it("renders transaction text", () => {
    render(<Transaction {...MOCK_TRANSACTION} />);

    const amount = screen.getByText(MOCK_TRANSACTION.amount);
    const description = screen.getByText(MOCK_TRANSACTION.description);
    expect(amount).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
