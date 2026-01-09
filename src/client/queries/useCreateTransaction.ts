import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { GET_TRANSACTIONS_QUERY_KEY } from "./useGetTransactions";
import type { AxiosError } from "axios";
import type { Transaction, TransactionResponse } from "../types/Transaction";

export const useCreateTransaction = (
  options?: UseMutationOptions<TransactionResponse, AxiosError, Transaction>
) => {
  const queryClient = useQueryClient();

  return useMutation<TransactionResponse, AxiosError, Transaction>({
    ...options,
    mutationFn: async (payload) => {
      const { data } = await axios.post("/transactions", payload);
      return data;
    },
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: GET_TRANSACTIONS_QUERY_KEY });
      options?.onSuccess?.(...args);
    },
  });
};
