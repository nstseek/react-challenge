import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../main.js";

const MOCK_TRANSACTION = { amount: 100, description: "test" };

describe("POST /api/transactions", () => {
  it("should add a transaction successfully", async () => {
    const res = await request(app)
      .post("/api/transactions")
      .send(MOCK_TRANSACTION)
      .expect(201);

    expect(res.body.amount).toBe(MOCK_TRANSACTION.amount);
    expect(res.body.description).toBe(MOCK_TRANSACTION.description);
  });
});

describe("GET /api/transactions", () => {
  it("should return list of transactions with total", async () => {
    const transactions = new Array(2).fill(MOCK_TRANSACTION);
    await Promise.all(
      transactions.map((transaction) =>
        request(app).post("/api/transactions").send(transaction).expect(201)
      )
    );
    const res = await request(app).get("/api/transactions").expect(200);

    expect(res.body.transactions).toBeInstanceOf(Array);
    expect(res.body.transactions.length).toBeGreaterThan(0);
    expect(res.body.total).toBeGreaterThan(0);
  });
});
