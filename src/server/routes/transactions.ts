import { Router } from "express";
import type { Transaction } from "../types/Transaction.js";

export const TransactionsRouter = Router();

const transactions: (Transaction & { id: string })[] = [];

let idCounter = 0;

TransactionsRouter.post("/", (req, res) => {
  transactions.push({ id: (++idCounter).toString(), ...req.body });
  res.json(transactions.at(-1));
});

TransactionsRouter.get("/", (_, res) => {
  res.json({
    transactions,
    total: transactions.reduce((acc, val) => acc + val.amount, 0),
  });
});
