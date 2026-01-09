import { fireEvent, render, screen } from "@testing-library/react";
import { TransactionsForm } from "./TransactionsForm";
import { describe, it, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

describe("TransactionsForm", () => {
  it("renders transactions form and saves with no errors", async () => {
    const user = userEvent.setup();
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <TransactionsForm />
      </QueryClientProvider>
    );

    const amountField = screen.getByLabelText("Amount");
    const descriptionField = screen.getByLabelText("Description");
    const saveButton = screen.getByRole("button", { name: "Save transaction" });

    await user.type(descriptionField, "test");
    await user.type(amountField, "100");

    fireEvent.click(saveButton);

    expect(
      screen.queryByText("You must insert a positive amount")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Description must be at least 3 characters")
    ).not.toBeInTheDocument();
  });
});
