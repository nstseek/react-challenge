import { render, screen } from "@testing-library/react";
import { TransactionsList } from "./TransactionsList";
import { describe, it, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MOCK_TRANSACTIONS = {
  transactions: [{ id: 1, amount: 100, description: "test" }],
  total: 200,
};

describe("TransactionsList", () => {
  it("renders transactions list details", () => {
    const queryClient = new QueryClient();
    queryClient.setQueryData(["transactions"], MOCK_TRANSACTIONS);

    render(
      <QueryClientProvider client={queryClient}>
        <TransactionsList />
      </QueryClientProvider>
    );

    const total = screen.getByText(MOCK_TRANSACTIONS.total);
    const results = screen.getByText(MOCK_TRANSACTIONS.transactions.length);
    expect(total).toBeInTheDocument();
    expect(results).toBeInTheDocument();
  });
});
