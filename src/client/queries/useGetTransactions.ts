import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TransactionResponse } from "../types/Transaction";

export const GET_TRANSACTIONS_QUERY_KEY = ["transactions"];

export const useGetTransactions = () => {
  return useQuery<TransactionResponse>({
    queryKey: GET_TRANSACTIONS_QUERY_KEY,
    queryFn: async () => {
      const { data } = await axios.get("/transactions");
      return data;
    },
  });
};
