import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { Transaction } from "../types/Transaction";

export const useCreateTransaction = () => {
  return useMutation<Transaction & { id: string }, any, Transaction>({
    mutationFn: async (payload) => {
      const { data } = await axios.post("/transactions", payload);
      return data;
    },
    mutationKey: ["transaction"],
  });
};
