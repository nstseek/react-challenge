import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Transaction } from "../types/Transaction";

export const useGetTransactions = () => {
  return useQuery<Transaction>({
    queryKey: ["transaction"],
    queryFn: async () => {
      const { data } = await axios.get("/transactions");
      return data;
    },
  });
};
